(function (window, undefined) {
	var moduleData = {};
	
	var createInstance = function (moduleId) {
		
	};
	
	var Core = function () {
		return {
			registerModule: function (moduleId, class) {
				moduleData[moduleId] = {
					class: class,
					instance: null
				};
			},
			
			startModule: function (moduleId) {
				moduleData[moduleId].instance = moduleData[moduleId].class( new Sandbox(this) );
				
				moduleData[moduleId].instance.init();				
			},
			stopModule: function (moduleId) {
				var module = moduleData[moduleId];
				if (module.instance) {
					data.instance.destroy();
					data.instance = null;
				}
			},
			
			startAllModules: function () {
				for (moduleId in moduleData) {
					if (moduleData.hasOwnProperty(moduleId)) {
						this.startModule(moduleId);
					}
				};
			},
			stopALlModules: function () {
				for (moduleId in moduleData) {
					if (moduleData.hasOwnProperty(moduleId)) {
						this.stopModule(moduleId);
					}
				}
			},
			
			addExtension: function (class) {
				
			}
		};
	}();
	
	window.Core = Core;
})(window);