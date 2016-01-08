var feedBaby = new Game({
    objects: {
        baby: {
            x: 100,
            y: 100,
            spr: Context.addSprite("img/baby.png")
        },
        food: {
            x: 500,
            y: 300,
            lift: false,
            spr: Context.addSprite("img/food.png")
        }
    }
})

feedBaby.build = function () {
    addSprite(this.baby.spr);
    addSprite(this.food.spr);
};

feedBaby.update = function () {
    if (Math.sqrt(Math.pow(this.food.x - mouseX,2) + Math.pow(this.food.y - mouseY,2)) < 32) this.food.lift = clicked;
    if (this.food.lift) {
        this.food.x = mouseX;
        this.food.y = mouseY;
    }
    if (Math.sqrt(Math.pow(this.food.x - this.baby.x,2) + Math.pow(this.food.y - this.baby.y,2)) < 32 && !this.baby.lift) {
        //TODO minigame completion code
    }
};