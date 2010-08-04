Core.registerModule('test', function (sb) {
	console.log('module');
	return {
		init: function () {
			var ext = sb.require('testext');
			console.log(ext);
		},
		
		destroy: function () {
			
		}
	};
	
});