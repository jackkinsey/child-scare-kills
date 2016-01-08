var Game = function(props){

    this.props = props;
    
}

Game.prototype = {
    constructor: Game,
    update: function(){},
    build: function(){},
    destroy: function(){}
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
        else if(typeof mode == "number" && mode < this.list.length){
            this.list[mode].build(context);
            this.built = mode;
        }
    },
    addGame: function(game){
        if(game instanceof Game){
            this.list.push(game);
        }
    }
}

var games = new GameList();