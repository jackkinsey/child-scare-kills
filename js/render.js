var Context = function(width, height){
    
    this.width = width;
    this.height = height;
    
    this.camera = this.cameraInit(this.width, this.height);
    this.scene = new THREE.Scene();
    this.renderer = new THREE.WebGLRenderer();
    this.renderer.setSize(this.width, this.height);
    
    this.clock = new THREE.Clock();
    this.delta = 0;
    
    this.mouse = null;
    this.keyboard = null;
    
    this.controller = null;
    
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
    addSprite: function(width, height, file, pos){
        
        var tex = new THREE.ImageUtils.loadTexture(file);
        var mat = new THREE.SpriteMaterial({map: tex});
        var spr = new THREE.Sprite(mat);
        spr.scale.set(width, height, 1);
        if(pos){
            spr.position.set(pos.x, pos.y, pos.z);
        }
        this.scene.add(spr);
        
        return spr;
    }
}

var Scary = new Context(1000, 600);

var draw = function(){
    requestAnimationFrame(draw);
    
    Scary.delta = Scary.clock.getDelta();
    Scary.controller.update(Scary);
    
    Scary.renderer.render(Scary.scene, Scary.camera);
}

var initialize = function(){
    Scary.DOM = {
        gameholder: document.getElementById("gameholder"),
        gamerel: document.getElementById("gamerel"),
        
        title: document.getElementById("title"),
        
        timer: document.getElementById("timer"),
        health: document.getElementById("health"),
        
        countdown: document.getElementById("countdown"),
        
        menu: document.getElementById("menu"),
        play: document.getElementById("play-button"),
        score: document.getElementById("score-button"),
        options: document.getElementById("options-button"),
        
        credits: document.getElementById("credits"),
        creditsback: document.getElementById("credits-back")
    }
    Scary.DOM.gameholder.appendChild(Scary.renderer.domElement);
    Scary.mouse.injectInto(Scary.renderer.domElement);
    Scary.keyboard.injectInto(document);
    Scary.DOM.play.addEventListener("click", function(event){Scary.controller.clickHandler(event, Scary)});
    Scary.DOM.options.addEventListener("click", function(event){Scary.controller.clickHandler(event, Scary)});
    Scary.DOM.creditsback.addEventListener("click", function(event){Scary.controller.clickHandler(event, Scary)});
    draw();
}