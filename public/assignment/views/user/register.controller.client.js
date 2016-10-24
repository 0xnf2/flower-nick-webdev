(function() {
    angular
        .module("WebAppMaker")
        .controller("RegisterController", RegisterController);
    function RegisterController() { 
        var vm = this;
        vm.iid = 0;
     }
})();