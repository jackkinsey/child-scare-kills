var feedBaby = new Game({
    objects: {
        baby: {
            widthX: 100,
            widthY: 100,
            spr: "img/baby.png"
        },
        food: {
            widthX: 500,
            widthY: 300,
            lift: false,
            spr: "img/food.png"
        }
    }
})

feedBaby.build = function(context) {
    context.addSprite(this.objects.baby.widthX, this.objects.baby.widthY, this.objects.baby.spr);
    context.addSprite(this.objects.food.widthX, this.objects.food.widthY, this.objects.food.spr);
};

feedBaby.update = function(mouse, delta) {
    if (Math.sqrt(Math.pow(this.objects.food.x - mouse.mouseX, 2) + Math.pow(this.objects.food.y - mouse.mouseY, 2)) < 32) this.objects.food.lift = mouse.clicked;
    if (this.objects.food.lift) {
        this.objects.food.x = mouse.mouseX;
        this.objects.food.y = mouse.mouseY;
    }
    if (Math.sqrt(Math.pow(this.objects.food.x - this.objects.baby.x,2) + Math.pow(this.objects.food.y - this.objects.baby.y,2)) < 32 && !this.objects.baby.lift) {
        //TODO minigame completion code
    }
};

