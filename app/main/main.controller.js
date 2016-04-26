(function() {
    'use strict';

    angular
        .module('uglymonaAdmin')
        .controller('MainController', MainController);

    /** @ngInject */
    function MainController($timeout) {
        var vm = this;
        
        var height = $(window).height();
        $('#page-sidebar-menu').css('height', height);
        // console.log('yes', $('#page-sidebar-menu'), height)
    }
})();
