var keyboard = null;

keyboard = new THREEx.KeyboardState();

var InputManager = {

    handlePressInput: function(event) {
		// only handle input when no other DOM element has focus.
		if (document.activeElement != document.body) return;

        if (event.repeat) {
			event.preventDefault();
            return;
        }
        
        if (keyboard.eventMatches(event, 'left')) {
            event.preventDefault();
            player.rotate(Math.PI);
            player.shoot("left", bulletSet);
        }
        if (keyboard.eventMatches(event, 'right')) {
            event.preventDefault();
            player.rotate(0);
            player.shoot("right", bulletSet);
        }
        if (keyboard.eventMatches(event, 'up')) {
            event.preventDefault();
            player.rotate(Math.PI/2);
            player.shoot("up", bulletSet);
        }
        if (keyboard.eventMatches(event, 'down')) {
            event.preventDefault();
            player.rotate(3*Math.PI/2);
            player.shoot("down", bulletSet);
        }
        
        if (keyboard.eventMatches(event, 'a')) {
            event.preventDefault();
            player.move("left");
        }
        if (keyboard.eventMatches(event, 'd')) {
            event.preventDefault();
            player.move("right");
        }
        if (keyboard.eventMatches(event, 'w')) {
            event.preventDefault();
            player.move("up");
        }
        if (keyboard.eventMatches(event, 's')) {
            event.preventDefault();
            player.move("down");
        }
        
    	if ( keyboard.eventMatches(event, 'z') ||
			 keyboard.eventMatches(event, 'space') ||
	 		 keyboard.eventMatches(event, 'enter')) {
      		event.preventDefault();
            //move code
    	}
		if ( keyboard.eventMatches(event, 'x')) {
			event.preventDefault();
            //move code
		}
    },

	handleReleaseInput: function(event) {
		if ( keyboard.eventMatches(event, 'z') ||
	 		 keyboard.eventMatches(event, 'x') ||
	 	     keyboard.eventMatches(event, 'space') ) {
			event.preventDefault();
		}
		if (keyboard.eventMatches(event, 'a') ||
		    keyboard.eventMatches(event, 'd')) {
            event.preventDefault();
            player.move("clear_x");
        }
        if (keyboard.eventMatches(event, 'w') ||
            keyboard.eventMatches(event, 's')){
            event.preventDefault();
            player.move("clear_y");
        }
	},

	injectInto: function(domElement) {
		domElement.addEventListener('keydown', InputManager.handlePressInput);
		domElement.addEventListener('keyup', InputManager.handleReleaseInput);
	},

};

InputManager.injectInto(document);