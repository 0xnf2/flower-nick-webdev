(function() {
    angular
        .module("WebAppMaker")
        .controller("PageListController", PageListController)
    function PageListController($routeParams, PageService) { 
        var vm = this;
        vm.userId = $routeParams["userId"];
        vm.webpageId = $routeParams["webpageId"];
         function init() {
            vm.pages = PageService.findPagesByWebsiteId(webpageId);
        };
        init();
     }
})();