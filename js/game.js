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
    this.built = -1;
    
}

GameList.prototype = {
    constructor: GameList,
    update: function(input, delta){
        if(this.built > -1){
            return this.list[this.built].update(input, delta);
        }
    },
    buildGame: function(mode, context){
        if(mode == "random"){
            if(this.built > -1){
                this.list[this.built].destroy(context);
            }
            var index = Math.floor(Math.random() * (this.list.length));
            if(index == this.built){
                index = Math.floor(Math.random() * (this.list.length));
            }
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
    },
    destroyGame: function(context){
        this.list[this.built].destroy(context);
        this.built = -1;
    }
}

Scary.controller.games = new GameList();