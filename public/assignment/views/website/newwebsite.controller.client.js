(function() {
    angular
        .module("WebAppMaker")
        .controller("NewWebsiteController", NewWebsiteController);
    function NewWebsiteController($routeParams, WebsiteService) { 
        var vm = this;
        vm.userId = $routeParams.uid;
        vm.websiteId = $routeParams.wid;

        vm.createWebsite = createWebsite;
        function createWebsite(name, description){
            WebsiteService.createWebsite(vm.userId, {"name":name, "description":description, "developerId": vm.userId});
        }
     }
})();