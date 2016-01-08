var MouseManager = {
    
    mouseX: 0,
    mouseY: 0,
    
    mouseState: "up",
    
    onMouseMove: function(event){
        event.preventDefault();
        MouseManager.mouseX = event.offsetX;
        MouseManager.mouseY = Scary.height - event.offsetY;//correct the mouse axis to be the same as the game axis
    },
    
    onMouseDown: function(event){
        event.preventDefault();
        MouseManager.mouseState = "down";
    },
    
    onMouseUp: function(event){
        event.preventDefault();
        MouseManager.mouseState = "up";
    },
    
    onRightClick: function(event){
        event.preventDefault();
    },
    
	injectInto: function(domElement){
		domElement.addEventListener('mousemove', MouseManager.onMouseMove);
		domElement.addEventListener('mousedown', MouseManager.onMouseDown);
		domElement.addEventListener('mouseup', MouseManager.onMouseUp);
		domElement.addEventListener('contextmenu', MouseManager.onRightClick);
	}
    
}

Scary.mouse = MouseManager;