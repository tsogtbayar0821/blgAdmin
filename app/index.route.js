(function() {
    'use strict';

    angular
        .module('uglymonaAdmin')
        .config(routerConfig);

    /** @ngInject */
    function routerConfig($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state('login', {
                url: '/',
                templateUrl: 'app/partials/login/login.html',
                controller: 'LoginController',
                // controllerAs: 'login'
            })
            .state('dashboard', {
                url: '/dashboard',
                templateUrl: 'app/main/main.html',
                controller: 'MainController',
                controllerAs: 'main'
            })
            .state('home', {
                url: '/home',
                templateUrl: 'app/partials/home/home.html',
                controller: 'HomeController',
                controllerAs: 'home'
            })
            .state('beauty', {
                url: '/beauty',
                templateUrl: 'app/partials/beauty/beauty.html',
                controller: 'BeautyController',
                controllerAs: 'beauty'
            })
            .state('flip', {
                url: '/flip',
                templateUrl: 'app/partials/flip/flip.html',
                controller: 'FlipController',
                controllerAs: 'flip'
            })
            .state('life', {
                url: '/life',
                templateUrl: 'app/partials/life/life.html',
                controller: 'LifeController',
                controllerAs: 'life'
            })
            .state('photograph', {
                url: '/photograph',
                templateUrl: 'app/partials/photograph/photograph.html',
                controller: 'PhotographController',
                controllerAs: 'photo'
            })
            .state('romantic', {
                url: '/romantic',
                templateUrl: 'app/partials/romantic/romantic.html',
                controller: 'RomanticController',
                controllerAs: 'rom'
            })
            .state('vlog', {
                url: '/vlog',
                templateUrl: 'app/partials/vlog/vlog.html',
                controller: 'VlogController',
                controllerAs: 'vlog'
            });
            

        $urlRouterProvider.otherwise('/');
    }

})();
