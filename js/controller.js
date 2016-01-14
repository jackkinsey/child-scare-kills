var Controller = function(){
    
    this.timer = new THREE.Clock(false);
    this.games = null;
    this.gameCount = 0;
    
}

Controller.prototype = {
    constructor: Controller,
    update: function(context){
        if(this.games.update(context.mouse, context.delta)){
            this.games.buildGame("random", context);
            this.gameCount -= 1;
            context.DOM.health.innerHTML = this.gameCount;
        }
        context.DOM.timer.innerHTML = this.timer.getElapsedTime().toFixed(1);
    },
    newGame: function(game){
        this.games.addGame(game);
    },
    play: function(context){
        this.timer.start();
<<<<<<< HEAD
        this.games.buildGame(5, context);
=======
        this.gameCount = 8;
        context.DOM.health.innerHTML = "8";
        this.games.buildGame("random", context);
>>>>>>> mazepatch
    },
    clickHandler: function(event, context){
        if(event.target.id == "play-button"){
            this.countdown(context);
        }/*
        if(event.target.id == "score-button"){
        }*/
        if(event.target.id == "options-button"){
            context.DOM.menu.classList.add("hidden");
            context.DOM.credits.classList.remove("hidden");
        }
    },
    countdown: function(context){
        context.DOM.title.classList.add("hidden");
        context.DOM.menu.classList.add("hidden");
        context.DOM.countdown.classList.remove("hidden");
        context.DOM.countdown.classList.add("go");
        setTimeout(function(countdown){
            countdown.innerHTML = "2";
        }, 950, context.DOM.countdown);
        setTimeout(function(countdown){
            countdown.innerHTML = "1";
        }, 1900, context.DOM.countdown);
        setTimeout(function(countdown){
            countdown.innerHTML = "GO!";
        }, 2850, context.DOM.countdown);
        setTimeout(function(countdown){
            countdown.classList.remove("go");
            countdown.classList.add("hidden");
            context.controller.play(context);
        }, 3800, context.DOM.countdown);
        context.DOM.gamerel.classList.add("ingame")
    }
}

Scary.controller = new Controller();
