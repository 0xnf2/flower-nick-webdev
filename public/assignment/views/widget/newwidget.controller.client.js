(function() {
    angular
        .module("WebAppMaker")
        .controller("NewWidgetController", NewWidgetController);
    function NewWidgetController() { 
        var vm = this;
        vm.iid = 0;
     }
})();