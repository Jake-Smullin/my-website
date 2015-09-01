'use strict';

// Configuring the CoolThings module
angular.module('cool-things').run(['Menus',
	function(Menus) {
		// Set top bar menu items
		Menus.addMenuItem('topbar', 'Cool Stuff', 'cool-things', '', '/cool-things', true);
	}
]);