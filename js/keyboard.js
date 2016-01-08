var keyboard = null;

keyboard = new THREEx.KeyboardState();

var KeyboardManager = {
    
    left: false,
    right: false,
    up: false,
    down: false,
    

    handlePressInput: function(event) {
		// only handle input when no other DOM element has focus.
		if (document.activeElement != document.body) return;

        if (event.repeat) {
			event.preventDefault();
            return;
        }
        
        if (keyboard.eventMatches(event, 'left')) {
            event.preventDefault();
            KeyboardManager.left = true;
        }
        if (keyboard.eventMatches(event, 'right')) {
            event.preventDefault();
            KeyboardManager.right = true;
        }
        if (keyboard.eventMatches(event, 'up')) {
            event.preventDefault();
            KeyboardManager.up = true;
        }
        if (keyboard.eventMatches(event, 'down')) {
            event.preventDefault();
            KeyboardManager.down = true;
        }
    },

	handleReleaseInput: function(event) {
        if (keyboard.eventMatches(event, 'left')){
            event.preventDefault();
            KeyboardManager.left = false;
        }
        if (keyboard.eventMatches(event, 'right')){
            event.preventDefault();
            KeyboardManager.right = false;
        }
        if (keyboard.eventMatches(event, 'up')){
            event.preventDefault();
            KeyboardManager.up = false;
        }
        if (keyboard.eventMatches(event, 'down')){
            event.preventDefault();
            KeyboardManager.down = false;
        }
	},

	injectInto: function(domElement) {
		domElement.addEventListener('keydown', KeyboardManager.handlePressInput);
		domElement.addEventListener('keyup', KeyboardManager.handleReleaseInput);
	},

};

Scary.keyboard = KeyboardManager;