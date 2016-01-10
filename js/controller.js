var Controller = function(){
    
    this.timer = new THREE.Clock(false);
    this.games = null;
    
}

Controller.prototype = {
    constructor: Controller,
    update: function(context){
        this.games.update(context.mouse, context.delta);
        context.DOM.timer.innerHTML = this.timer.getElapsedTime().toFixed(1);
    },
    newGame: function(game){
        this.games.addGame(game);
    },
    play: function(context){
        this.timer.start();
        this.games.buildGame("random", context);
    },
    clickHandler: function(event, context){
        if(event.target.id == "play-button"){
            this.countdown(context);
        }/*
        if(event.target.id == "score-button"){
        }
        if(event.target.id == "option-button"){
        }*/
    },
    countdown: function(context){
        context.DOM.title.classList.add("hidden");
        context.DOM.menu.classList.add("hidden");
        context.DOM.countdown.classList.remove("hidden");
        context.DOM.countdown.classList.add("go");
        setTimeout(function(countdown){
            countdown.innerHTML = "2";
        }, 930, context.DOM.countdown);
        setTimeout(function(countdown){
            countdown.innerHTML = "1";
        }, 1860, context.DOM.countdown);
        setTimeout(function(countdown){
            countdown.innerHTML = "GO!";
        }, 2790, context.DOM.countdown);
        setTimeout(function(countdown){
            countdown.classList.remove("go");
            countdown.classList.add("hidden");
            context.controller.play(context);
        }, 3720, context.DOM.countdown);
        context.DOM.gamerel.classList.add("ingame")
    }
}

Scary.controller = new Controller();