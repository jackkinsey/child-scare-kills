var jumperCables = new Game({
    positive: {
        posX: 100,
        posY: 100,
        initX: 100,
        initY: 100,
        zIndex: -1,
        widthX: 120,
        widthY: 200,
        lift: false,
        attached: false,
        src: "img/positive.png",
        spr: null
    },
    negative: {
        posX: 200,
        posY: 400,
    	initX: 200,
    	initY: 400,
        zIndex: 0,
        widthX: 132,
        widthY: 200,
        lift: false,
        attached: false,
        src: "img/negative.png",
        spr: null
    },
    battery: {
        posX: 500,
        posY: 300,
        zIndex: -1,
        widthX: 480,
        widthY: 400,
        src: "img/dead-battery.png",
        spr: null
    },
    positiveTerm: {
    	posX: 420,
    	posY: 375
    },
    negativeTerm: {
    	posX: 560,
    	posY: 375
    },
    tolerance: 64
});

jumperCables.build = function(context) {
    this.props.positive.spr = context.addSprite(this.props.positive.widthX, this.props.positive.widthY, this.props.positive.src, {x: this.props.positive.posX,
                                                                                                                  y: this.props.positive.posY,
                                                                                                                  z: this.props.positive.zIndex});
    this.props.negative.spr = context.addSprite(this.props.negative.widthX, this.props.negative.widthY, this.props.negative.src, {x: this.props.negative.posX,
                                                                                                                  y: this.props.negative.posY,
                                                                                                                  z: this.props.negative.zIndex});
	this.props.battery.spr = context.addSprite(this.props.battery.widthX, this.props.battery.widthY, this.props.battery.src, {x: this.props.battery.posX,
                                                                                                                  y: this.props.battery.posY,
                                                                                                                  z: this.props.battery.zIndex});
};

jumperCables.update = function(mouse, delta) {
    if (Math.sqrt(Math.pow(this.props.positive.posX - mouse.mouseX, 2) + Math.pow(this.props.positive.posY - mouse.mouseY, 2)) < this.props.tolerance && !this.props.negative.lift){
        this.props.positive.lift = mouse.mouseState == "down" ? true : false;
    }
    if (this.props.positive.lift) {
        this.props.positive.posX = mouse.mouseX;
        this.props.positive.posY = mouse.mouseY;
        
        this.props.positive.spr.position.set(this.props.positive.posX, this.props.positive.posY, 0);
    }
    
    if (Math.sqrt(Math.pow(this.props.negative.posX - mouse.mouseX, 2) + Math.pow(this.props.negative.posY - mouse.mouseY, 2)) < this.props.tolerance && !this.props.positive.lift){
        this.props.negative.lift = mouse.mouseState == "down" ? true : false;
    }
    if (this.props.negative.lift) {
        this.props.negative.posX = mouse.mouseX;
        this.props.negative.posY = mouse.mouseY;
        
        this.props.negative.spr.position.set(this.props.negative.posX, this.props.negative.posY, 0);
    }
    
    
    if (Math.sqrt(Math.pow(this.props.positive.posX - this.props.positiveTerm.posX,2) + Math.pow(this.props.positive.posY - this.props.positiveTerm.posY,2)) < 32 && !this.props.positiveTerm.lift) {
        this.props.positive.posX = this.props.positiveTerm.posX;
        this.props.positive.posY = this.props.positiveTerm.posY;
        this.props.positive.spr.position.set(this.props.positive.posX, this.props.positive.posY, 0);
        this.props.positive.attached = true;
    }
    if (Math.sqrt(Math.pow(this.props.negative.posX - this.props.negativeTerm.posX,2) + Math.pow(this.props.negative.posY - this.props.negativeTerm.posY,2)) < 32 && !this.props.negativeTerm.lift) {
        if (this.props.positive.attached) {
        	this.props.negative.posX = this.props.negativeTerm.posX;
        	this.props.negative.posY = this.props.negativeTerm.posY;
        	this.props.negative.spr.position.set(this.props.negative.posX, this.props.negative.posY, 0);
        	return true;
        }
    }
    return false;
};

jumperCables.destroy = function(context){
    context.scene.remove(this.props.positive.spr);
    context.scene.remove(this.props.negative.spr);
    context.scene.remove(this.props.battery.spr);
    context.scene.remove(this.props.positiveTerm.spr);
    context.scene.remove(this.props.negativeTerm.spr);
    this.props.positive.spr = null;
    this.props.negative.spr = null;
    this.props.battery.spr = null;
    this.props.positiveTerm.spr = null;
    this.props.negativeTerm.spr = null;
    this.props.positive.posX = this.props.positive.initX;
    this.props.positive.posY = this.props.positive.initY;
    this.props.positive.attached = false;
    this.props.positive.lift = false;
    this.props.negative.posX = this.props.negative.initX;
    this.props.negative.posY = this.props.negative.initY;
    this.props.negative.attached = false;
    this.props.negative.lift = false;
}

Scary.controller.newGame(jumperCables);
