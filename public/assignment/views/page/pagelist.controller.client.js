(function() {
    angular
        .module("WebAppMaker")
        .controller("PageListController", PageListController);
    function PageListController($routeParams, PageService) { 
        var vm = this;
        vm.userId = $routeParams.userId;
        vm.webpageId = $routeParams.webpageId;
         function init() {
            let promise = PageService.findPagesByWebsiteId(vm.webpageId);
            promise
                .success(function(pages){
                    vm.pages = pages;
            })
            .error(function(err){
                     console.log("error: " + err);
            });
        }
        init();
     }
})();