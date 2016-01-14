/*
 * Liam McFalls
 */

var startCar = new Game({
    keyhole: {
        posX: 100,
        posY: 100,
        zIndex: -1,
        widthX: 128,
        widthY: 128,
        rot: 0,
        on: false,
        src: "img/keyhole.png",
        spr: null
    },
    won: false
});

startCar.build = function(context) {
        this.props.keyhole.spr = context.addSprite(this.props.keyhole.widthX, this.props.keyhole.widthY, this.props.keyhole.src, {x: this.props.keyhole.posX,
                                                                                                                  y: this.props.keyhole.posY,
                                                                                                                  z: this.props.keyhole.zIndex});
};

startCar.update = function(mouse, delta) {
    if (Scary.keyboard.d && this.props.keyhole.rot < Math.PI / 2) {
        this.props.keyhole.rot += Math.PI*delta;
        this.props.keyhole.spr.material.rotation = -this.props.keyhole.rot;
    } else if (!Scary.keyboard.d && this.props.keyhole.rot > 0) {
        this.props.keyhole.rot -= (Math.PI / 2)*delta;
        this.props.keyhole.spr.material.rotation = -this.props.keyhole.rot;
        this.props.keyhole.on = false;
    } else if (Scary.keyboard.d) {
        this.props.keyhole.on = true;
    } else {
        this.props.keyhole.on = false;
    }
    
    if (Scary.keyboard.space) {
        if(!this.props.won){
            if (this.props.keyhole.on){
                this.props.won = true;
                return true;
            }
        }
    }
    
    return false;
};

startCar.destroy = function(context){
    context.scene.remove(this.props.keyhole.spr);
    this.props.keyhole.spr = null;
    this.props.keyhole.rot = 0;
    this.props.won = false;
}

Scary.controller.newGame(startCar);