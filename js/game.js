var Game = function(options){

    this.objects = options["objects"];
    
}

Game.prototype = {
    constructor: Game,
    update: function(){},
    build: function(){}
}

var GameList = function(){
    
    this.list = [];
    this.built = 0;
    
}

GameList.prototype = {
    constructor: GameList,
    update: function(input, delta){
        this.list[this.built].update(input, delta);
    },
    buildGame: function(mode, context){
        if(mode == "random"){
            var index = Math.floor(Math.random() * (this.list.length));
            this.list[index].build(context);
            this.built = index;
        }
    }
}