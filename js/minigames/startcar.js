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
    }
})

feedBaby.build = function(context) {
    this.props.keyhole.spr = context.addSprite(this.props.keyhole.widthX, this.props.baby.widthY, this.props.baby.src, {x: this.props.baby.posX,
                                                                                                                  y: this.props.baby.posY,
                                                                                                                  z: this.props.baby.zIndex});
};

feedBaby.update = function(mouse, delta) {
    if (keyboard.d == down && this.props.keyhole.rot < Math.PI / 2) {
        this.props.keyhole.rot += (Math.PI / 16)*delta;
        this.props.keyhole.spr.material.rotation = this.props.keyhole.rot;
    } else if (keyboard.d == up && this.props.keyhole.rot > 0) {
        this.props.keyhole.rot -= (Math.PI / 16)*delta;
        this.props.keyhole.spr.material.rotation = this.props.keyhole.rot;
    } else {
        this.props.keyhole.on = (this.props.keyhole == 0) ? false : true;
    }
    
    if (keyboard.space == down) {
        if (this.props.keyhole.on); //win
        else; //lose
    }
};

games.addGame(feedBaby);