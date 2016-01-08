
var feedBaby = new Game() {
    baby: {
        x: 100,
        y: 100,
        spr: getSprite("res/baby.png")
    },
    food: {
        x: 500,
        y: 300,
        lift: false,
        spr: getSprite("res/food.png")
    }
    
};



feedBaby.prototype.build = function () {
    addSprite(this.baby.spr);
    addSprite(this.food.spr);
};

feedBaby.prototype.update = function () {
    if (Math.sqrt(Math.pow(this.food.x - mouseX,2) + Math.pow(this.food.y - mouseY,2)) < 32) this.food.lift = clicked;
    if (this.food.lift) {
        this.food.x = mouseX;
        this.food.y = mouseY;
    }
    if (Math.sqrt(Math.pow(this.food.x - this.baby.x,2) + Math.pow(this.food.y - this.baby.y,2)) < 32 && !this.baby.lift) {
        //TODO minigame completion code
    }
};


var addSprite = function (spr) {
    //TODO add sprite to scene
};

var getSprite = function (image) {
    var map = new THREE.ImageUtils.loadTexture(image);
    var material = new THREE.SpriteMaterial({map: map, rotation: 0});
    var sprite = new THREE.Sprite(material);

    return sprite;
};