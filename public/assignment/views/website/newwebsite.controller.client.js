(function() {
    angular
        .module("WebAppMaker")
        .controller("NewWebsiteController", NewWebsiteController);
    function NewWebsiteController() { 
        var vm = this;
        vm.iid = 0;
     }
})();