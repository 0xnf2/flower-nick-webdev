(function() {
    angular
        .module("WebAppMaker")
        .controller("EditWebsiteController", EditWebsiteController);
    function EditWebsiteController($routeProvider, WebsiteService) { 
        var vm = this;
        vm.websiteId = $routeProvider.websiteId;
        vm.updateWebsite = updateWebsite;
        vm.deleteWebsite = deleteWebsite;

        function updateWebsite(website) {
            WebsiteService.updateWebsite(vm.websiteId, website);
        }

        function deleteWebsite() {
            WebsiteService.deleteWebsite(vm.websiteId);
        }
        function init() {
            vm.website = WebsiteService.findWebsiteById(vm.websiteId);
        }
        init();
     }
})();