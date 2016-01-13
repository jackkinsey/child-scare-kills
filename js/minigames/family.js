/* 
 * Liam McFalls
 */


/*
 * Liam McFalls
 */

var family = new Game({
    fam1: {
        posX: 100,
        posY: 100,
        zIndex: -1,
        widthX: 128,
        widthY: 128,
        src: "img/single-parent.png",
        spr: null
    },
    won: false,
    tolerance: 64
});

family.build = function(context) {
        this.props.fam1.spr = context.addSprite(this.props.fam1.widthX, this.props.fam1.widthY, this.props.fam1.src, {x: this.props.fam1.posX,
                                                                                                                  y: this.props.fam1.posY,
                                                                                                                  z: this.props.fam1.zIndex});
};

family.update = function(mouse, delta) {
    if (Math.sqrt(Math.pow(this.props.fam1.posX - mouse.mouseX, 2) + Math.pow(this.props.fam1.posY - mouse.mouseY, 2)) < this.props.tolerance && mouse.mouseState == "down") {
        //Win
    }
};

Scary.controller.newGame(family);