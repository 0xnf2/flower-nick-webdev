(function() {
    angular
        .module("WebAppMaker")
        .controller("WidgetListController", WidgetListController);
    function WidgetListController($routeParams, WidgetService) { 
        var vm = this;
        vm.userId = $routeParams.userId;
        vm.websiteId = $routeParams.websiteId;
        vm.pageId = $routeParams.pageId;
        function init() {
            let promise = WidgetService.findWidgetsByPageId(vm.pageId);
            promise
                .success(function(widgets){
                    vm.widgets = widgets;
            })
            .error(function(err){
                     console.log("error: " + err);
            });
        }
        init();
     }
})();