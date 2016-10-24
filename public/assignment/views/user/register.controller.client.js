(function() {
    angular
        .module("WebAppMaker")
        .controller("RegisterController", RegisterController);
    function RegisterController() { 
        var vm = this;
        this.username = "";
        this.password = "";
        vm.iid = 0;
     }
})();