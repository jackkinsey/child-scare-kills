/*
 * Liam McFalls
 */

var startCar = new Game({
    
})

startCar.build = function(context) {
    
};

startCar.update = function(mouse, delta) {
    if (Math.sqrt(Math.pow(this.props.food.posX - mouse.mouseX, 2) + Math.pow(this.props.food.posY - mouse.mouseY, 2)) < this.props.tolerance){
        this.props.food.lift = mouse.mouseState == "down" ? true : false;
    }
    if (this.props.food.lift) {
        this.props.food.posX = mouse.mouseX;
        this.props.food.posY = mouse.mouseY;
        
        this.props.food.spr.position.set(this.props.food.posX, this.props.food.posY, 0);
    }
    if (Math.sqrt(Math.pow(this.props.food.posX - this.props.baby.posX,2) + Math.pow(this.props.food.posY - this.props.baby.posY,2)) < 32 && !this.props.baby.lift) {
        console.log("You fed baby!");
    }
};

//games.addGame(startCar);