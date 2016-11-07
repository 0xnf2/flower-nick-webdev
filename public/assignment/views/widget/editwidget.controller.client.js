(function() {
    angular
        .module("WebAppMaker")
        .controller("EditWidgetController", EditWidgetController);
    function EditWidgetController($routeParams, WidgetService) { 
        var vm = this;
        vm.widgetId = $routeParams.widgetId;
        function init() {
            let promise = WidgetService.findWidgetById(vm.widgetId);
            promise
                .success(function(widget){
                    vm.widget = widget;
            })
            .error(function(err){
                     console.log("error: " + err);
            });
        }
        init();
     }
})();