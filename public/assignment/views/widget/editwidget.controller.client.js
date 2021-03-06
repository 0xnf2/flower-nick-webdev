(function() {
    angular
        .module("WebAppMaker")
        .controller("EditWidgetController", EditWidgetController);
    function EditWidgetController($routeParams, WidgetService) { 
        var vm = this;
        vm.widgetId = $routeParams.widgetId;
        function init() {
            vm.widget = WidgetService.findWidgetById(vm.widgetId);
        }
        init();
     }
})();