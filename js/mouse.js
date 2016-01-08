var MouseWatcher = function(){
    
    this.mouseX = 0;
    this.mouseY = 0;
    this.clicked = false;
    
    this.originX = 0;
    this.originY = 0;

    document.addEventListener("mousemove", this.onMouseMove, false);
    
}

MouseWatcher.prototype = {
    constructor: MouseWatcher,
    onMouseMove: function(event){
        event.preventDefault();
        mouseX = event.clientX - this.originX;
        mouseY = event.clientY - this.originY;
        clicked = event.isMouseDown;
    }
}

var mouse = new MouseWatcher();