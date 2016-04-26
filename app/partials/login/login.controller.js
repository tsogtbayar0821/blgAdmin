(function() {
    'use strict';

    angular
        .module('uglymonaAdmin')
        .controller('LoginController', LoginController);

    /** @ngInject */
    function LoginController($state, $scope, $log, $rootScope) {
        $scope.isLogin = true;
        $scope.isForget = false;
        $scope.isRegister = false;
        $rootScope.isLoged = false;
        $scope.goLogin = function() {
            setTimeout(function() {
                $state.go('home');
                $rootScope.isLoged = true;
            }, 500)
        }
        $scope.goForget = function() {
            $log.log('forget');
            $scope.isLogin = false;
            $scope.isForget = true;
            $scope.isRegister = false;
        }
        $scope.goRegister = function() {
            $log.log('register');
            $scope.isLogin = false;
            $scope.isForget = false;
            $scope.isRegister = true;
        }
        $scope.goBack = function() {
            $scope.isLogin = true;
            $scope.isForget = false;
            $scope.isRegister = false;
        }
    }
})();
