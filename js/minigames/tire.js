/* 
 * Liam McFalls
 */


var changeTire = new Game({
    tire: {
        posX: 100,
        posY: 100,
        zIndex: -1,
        widthX: 256,
        widthY: 256,
        src: "img/tire.png",
        spr: null
    },
    lugnuts: [
            lugnut1 = {
                posX: 300,
                posY: 300,
                zIndex: 0,
                widthX: 16,
                widthY: 16,
                yVel: 0,
                clicked: false,
                src: "img/lugnut.png",
                spr: null
            },
            lugnut2 = {
                posX: 270,
                posY: 270,
                zIndex: 0,
                widthX: 16,
                widthY: 16,
                yVel: 0,
                clicked: false,
                src: "img/lugnut.png",
                spr: null
            },
            lugnut3 = {
                posX: 285,
                posY: 240,
                zIndex: 0,
                widthX: 16,
                widthY: 16,
                yVel: 0,
                clicked: false,
                src: "img/lugnut.png",
                spr: null
            },
            lugnut4 = {
                posX: 315,
                posY: 240,
                zIndex: 0,
                widthX: 16,
                widthY: 16,
                yVel: 0,
                clicked: false,
                src: "img/lugnut.png",
                spr: null
            },
            lugnut5 = {
                posX: 330,
                posY: 270,
                zIndex: 0,
                widthX: 16,
                widthY: 16,
                yVel: 0,
                clicked: false,
                src: "img/lugnut.png",
                spr: null
            }
        ],
    won: false,
    tolerance: 10
});

changeTire.build = function (context) {
    this.props.tire.spr = context.addSprite(this.props.tire.widthX, this.props.tire.widthY, this.props.tire.src, {x: this.props.tire.posX,
        y: this.props.tire.posY,
        z: this.props.tire.zIndex});

    for (var i = 0; i < this.props.lugnuts.length; i++) {
        this.props.lugnuts[i].spr = context.addSprite(this.props.lugnuts[i].widthX, this.props.lugnuts[i].widthY, this.props.lugnuts[i].src, {x: this.props.lugnuts[i].posX,
            y: this.props.lugnuts[i].posY,
            z: this.props.lugnuts[i].zIndex});
    }
};

changeTire.update = function (mouse, delta) {
    for (var i = 0; i < this.props.lugnuts.length; i++) {
        if (Math.sqrt(Math.pow(this.props.lugnuts[i].posX - mouse.mouseX, 2) + Math.pow(this.props.lugnuts[i].posY - mouse.mouseY, 2)) < this.props.tolerance && mouse.mouseState == "down") {
            if (i == 0) {
                this.props.lugnuts[i].clicked = true;
            } else if (i == 3 && this.props.lugnuts[1].clicked) {
                this.props.lugnuts[i].clicked = true;
                //win
            } else if (i == 1) {
                if (this.props.lugnuts[4].clicked) {
                  this.props.lugnuts[i].clicked = true;  
                } else; //lose
            } else {
                if (this.props.lugnuts[(i-2)%5].clicked) {
                  this.props.lugnuts[i].clicked = true;  
                } else; //lose
            }
        }
        
        if (this.props.lugnuts[i].clicked && this.props.lugnuts[i].posY > 8) {
            this.props.lugnuts[i].yVel -= 25;
        } else {
            this.props.lugnuts[i].yVel = 0;
        }
        
        if (this.props.lugnuts[i].posY < 8) { 
            this.props.lugnuts[i].posY = 8;
            this.props.lugnuts[i].yVel = 0;
        }
        
        this.props.lugnuts[i].posY += this.props.lugnuts[i].yVel*delta;
        this.props.lugnuts[i].spr.position.set(this.props.lugnuts[i].posX, this.props.lugnuts[i].posY, this.props.lugnuts[i].zIndex);
        
    }
};

Scary.controller.newGame(changeTire);