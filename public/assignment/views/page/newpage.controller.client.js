(function() {
    angular
        .module("WebAppMaker")
        .controller("NewPageController", NewPageController)
    function NewPageController() { 
        var vm = this;
        vm.iid = 0;
     }
})();