var Context = function(width, height, worldVar){
    
    this.width = width;
    this.height = height;
    
    this.camera = this.cameraInit(this.width, this.height);
    this.scene = new THREE.Scene();
    this.renderer = new THREE.WebGLRenderer();
    renderer.setSize(this.width, this.height);
    
    this.clock = new THREE.Clock();
    this.delta = 0;
    
    this.worldVar = worldVar;
    
    this.DOM = {};
    
}

Context.prototype = {
    constructor: Context,
    cameraInit: function(w, h){
    
        var viewSize = h;
        var aspectRatio = w / h;
        
        var _viewport = {
            viewSize: viewSize,
            aspectRatio: aspectRatio,
            left: 0,
            right: (aspectRatio * viewSize),
            top: viewSize,
            bottom: 0,
            near: 0,
            far: 100
        }
        
        var camera = new THREE.OrthographicCamera (
            _viewport.left,
            _viewport.right,
            _viewport.top,
            _viewport.bottom,
            _viewport.near,
            _viewport.far
        );
    
        return camera;
    },
    addSprite: function(width, height, file){
        
        var tex = new THREE.ImageUtils.loadTexture(file);
        var mat = new THREE.SpriteMaterial({map: tex});
        var spr = new THREE.Sprite(mat);
        spr.scale.set(width, height, 1);
        this.scene.add(spr);
        
        return spr;
    },
    draw: function(){
        requestAnimationFrame(this.draw);
    
        this.delta = this.clock.getDelta();
        
        this.renderer.render(this.scene, this.camera);
    }
}

var initialize = function(){
    document.getElementById("gameholder").appendChild(renderer.domElement);
    draw();
}