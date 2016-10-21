(function() {
    angular
        .module("WebAppMaker")
        .controller("WidgetListController", WidgetListController)
    function WidgetListController($routeParams, WidgetService) { 
        var vm = this;
        vm.userId = $routeParams["userId"];
        vm.websiteId = $routeParams["websiteId"];
        vm.pageId = $routeParams["pageId"];
        function init() {
            vm.widgets = WidgetService.findWidgetsByPageId(pageId);
        }
        init();
     }
})();