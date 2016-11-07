(function() {
    angular
        .module("WebAppMaker")
        .controller("EditPageController", EditPageController);
    function EditPageController($routeParams, PageService) { 
        var vm = this;
        vm.pageId = $routeParams.pageId;
        function init() {
            let promise = PageService.findPageById(vm.pageId);
            promise
                .success(function(page){
                    vm.page = page;
            })
            .error(function(err){
                     console.log("error: " + err);
            });
        }
        init();
     }
})();