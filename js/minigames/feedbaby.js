var feedBaby = new Game({
    baby: {
        posX: 100,
        posY: 100,
        zIndex: -1,
        widthX: 128,
        widthY: 128,
        src: "img/baby.png",
        spr: null
    },
    food: {
        posX: 200,
        posY: 400,
        zIndex: 0,
        widthX: 64,
        widthY: 64,
        lift: false,
        src: "img/food.png",
        spr: null
    },
    tolerance: 16
})

feedBaby.build = function(context) {
    this.props.baby.spr = context.addSprite(this.props.baby.widthX, this.props.baby.widthY, this.props.baby.src, {x: this.props.baby.posX,
                                                                                                                  y: this.props.baby.posY,
                                                                                                                  z: this.props.baby.zIndex});
    this.props.food.spr = context.addSprite(this.props.food.widthX, this.props.food.widthY, this.props.food.src, {x: this.props.food.posX,
                                                                                                                  y: this.props.food.posY,
                                                                                                                  z: this.props.food.zIndex});
};

feedBaby.update = function(mouse, delta) {
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

games.addGame(feedBaby);