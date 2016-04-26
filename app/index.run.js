(function() {
    'use strict';

    angular
        .module('uglymonaAdmin')
        .run(runBlock);

    /** @ngInject */
    function runBlock($log, $state, $rootScope) {
        $rootScope.isLoged = true;
        $log.debug('runBlock end');
        $rootScope.isActive = function(state){
        	if($state.current.name == state){
        		return true
        	}else{
        		return false
        	}
        }

    }

})();
