window.addEventListener('load', function() {
	// Disable right-click context menu
	window.addEventListener('contextmenu', function(e) {
		e.preventDefault();
	});
	
	// Disable keyboard shortcuts
	window.addEventListener('keydown', function(e) {
		if (e.ctrlKey && (e.keyCode === 67 || e.keyCode === 86 || e.keyCode === 85 || e.keyCode === 117)) {
			// Disable Ctrl+C, Ctrl+V, Ctrl+U and F6
			e.preventDefault();
		}
	});
	
	// Disable backspace and F5 refresh
	window.addEventListener('keydown', function(e) {
		if (e.keyCode === 8 || e.keyCode === 116) {
			e.preventDefault();
		}
	});
	
	// Disable mousewheel scrolling
	window.addEventListener('wheel', function(e) {
		e.preventDefault();
	});
	
	// Disable console
	Object.defineProperty(window, 'console', {
		value: console,
		writable: false,
		enumerable: true,
		configurable: true
	});
	
	// Disable alerts
	window.alert = function() {};
	
	// Disable prompt
	window.prompt = function() {};
	
	// Disable confirm
	window.confirm = function() {};
	
	// Disable history navigation
	window.history.pushState(null, null, '');
	window.addEventListener('popstate', function() {
		window.history.pushState(null, null, '');
	});
});
