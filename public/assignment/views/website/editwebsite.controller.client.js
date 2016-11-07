(function() {
    angular
        .module("WebAppMaker")
        .controller("EditWebsiteController", EditWebsiteController);
    function EditWebsiteController($routeParams, WebsiteService) { 
        var vm = this;
        vm.userId = $routeParams.uid;
        vm.websiteId = $routeParams.wid;
        vm.website = WebsiteService.findWebsiteById(vm.websiteId);
        vm.updateWebsite = updateWebsite;
        vm.deleteWebsite = deleteWebsite;

        function updateWebsite(website) {
            let promise = WebsiteService.updateWebsite(vm.websiteId, website);
            promise
                .success(function(success){
                    console.log("success: " + success);
            })
            .error(function(err){
                     console.log("error: " + err);
            });
        }

        function deleteWebsite() {
            let promise = WebsiteService.deleteWebsite(vm.websiteId);
            promise
                .success(function(success){
                    console.log("success: " + success);
            })
            .error(function(err){
                     console.log("error: " + err);
            });
        }
        function init() {
            let promise = WebsiteService.findWebsiteById(vm.websiteId);
            promise
                .success(function(website){
                    vm.website = website;
            })
            .error(function(err){
                     console.log("error: " + err);
            });
        }
        init();
     }
})();