/*
 * Liam McFalls
 */

var maze = new Game({
    baby: {
        posX: 128,
        posY: 512,
        initX: 128,
        initY: 512,
        zIndex: 0,
        widthX: 64,
        widthY: 64,
        src: "img/babyblue.png",
        lift: false,
        spr: null
    },
    path1: {
        //horizontal
        startX: 127,
        startY: 512,
        length: 580
    },
    path2: {
        //vertical
        startX: 704,
        startY: 236,
        length: 270
    },
    path3: {
        //horizontal
        startX: 255,
        startY: 256,
        length: 450
    },
    path4: {
        //vertical
        startX: 255,
        startY: 127,
        length: 128
    },
    house: {
        posX: 256,
        posY: 128,
        zIndex: 0,
        widthX: 64,
        widthY: 64,
        src: "img/home.png",
        spr: null
    },
    formList: [],
    tolerance: 64,
    won: false
})

maze.build = function (context) {
    this.props.baby.spr = context.addSprite(this.props.baby.widthX, this.props.baby.widthY, this.props.baby.src, {x: this.props.baby.posX,
        y: this.props.baby.posY,
        z: this.props.baby.zIndex});

    this.props.house.spr = context.addSprite(this.props.house.widthX, this.props.house.widthY, this.props.house.src, {x: this.props.house.posX,
        y: this.props.house.posY,
        z: this.props.house.zIndex});
    for (var x = 0; x < 1000; x += 64) {
        for (var y = 0; y < 600; y += 64) {
            var draw = true;
            if (x > this.props.path1.startX && x < this.props.path1.startX + this.props.path1.length && Math.abs(y - this.props.path1.startY) < this.props.tolerance)
                draw = false;
            else if (y > this.props.path2.startY && y < this.props.path2.startY + this.props.path2.length && Math.abs(x - this.props.path2.startX) < this.props.tolerance)
                draw = false;
            else if (x > this.props.path3.startX && x < this.props.path3.startX + this.props.path3.length && Math.abs(y - this.props.path3.startY) < this.props.tolerance)
                draw = false;
            else if (y > this.props.path4.startY && y < this.props.path4.startY + this.props.path4.length && Math.abs(x - this.props.path4.startX) < this.props.tolerance)
                draw = false;
            if (draw) {
                this.props.formList.push(context.addSprite(64, 64, "img/form.png", {x: x, y: y, z: -1}));
            }
        }
    }
};

maze.update = function (mouse, delta) {
    if (Math.sqrt(Math.pow(this.props.baby.posX - mouse.mouseX, 2) + Math.pow(this.props.baby.posY - mouse.mouseY, 2)) < this.props.tolerance) {
        this.props.baby.lift = mouse.mouseState == "down" ? true : false;
    }
    if (this.props.baby.lift) {
        this.props.baby.posX = mouse.mouseX;
        this.props.baby.posY = mouse.mouseY;

        this.props.baby.spr.position.set(this.props.baby.posX, this.props.baby.posY, 0);
    }

    var onPath = false;
    if (this.props.baby.posX > this.props.path1.startX && this.props.baby.posX < this.props.path1.startX + this.props.path1.length && Math.abs(this.props.baby.posY - this.props.path1.startY) < this.props.tolerance)
        onPath = true;
    else if (this.props.baby.posY > this.props.path2.startY && this.props.baby.posY < this.props.path2.startY + this.props.path2.length && Math.abs(this.props.baby.posX - this.props.path2.startX) < this.props.tolerance)
        onPath = true;
    else if (this.props.baby.posX > this.props.path3.startX && this.props.baby.posX < this.props.path3.startX + this.props.path3.length && Math.abs(this.props.baby.posY - this.props.path3.startY) < this.props.tolerance)
        onPath = true;
    else if (this.props.baby.posY > this.props.path4.startY && this.props.baby.posY < this.props.path4.startY + this.props.path4.length && Math.abs(this.props.baby.posX - this.props.path4.startX) < this.props.tolerance)
        onPath = true;
    else if (Math.abs(this.props.baby.posX - this.props.house.posX) < 128 && Math.abs(this.props.baby.posY - this.props.house.posY) < 128)
        onPath = true;
    
    if (!onPath) {
        this.props.baby.lift = false;
        this.props.baby.posX = 128;
        this.props.baby.posY = 512;
        this.props.baby.spr.position.set(this.props.baby.posX, this.props.baby.posY, 0);
    }

    if (Math.sqrt(Math.pow(this.props.house.posX - this.props.baby.posX, 2) + Math.pow(this.props.house.posY - this.props.baby.posY, 2)) < 32 && !this.props.baby.lift) {
        if(!this.props.won){
            this.props.won = true;
            return true;
        }
    }
    return false;
};

maze.destroy = function(context){
    context.scene.remove(this.props.baby.spr);
    this.props.baby.spr = null;
    this.props.baby.posX = this.props.baby.initX;
    this.props.baby.posY = this.props.baby.initY;
    this.props.baby.lift = false;
    context.scene.remove(this.props.house.spr);
    this.props.house.spr = null;
    var len = this.props.formList.length - 1
    for(var i = len; i > -1; i--){
        context.scene.remove(this.props.formList[i]);
    }
    this.props.won = false;
}

Scary.controller.newGame(maze);