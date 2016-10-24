(function() {
    angular
        .module("WebAppMaker")
        .controller("LoginController", LoginController);
    function LoginController($location, UserService) { 
        var vm = this;
        vm.login = login;
        this.username = "";
        this.password = "";
        function login(username, password) {
            let user = UserService.findUserByCredentials(username, password);
            if(user) {
                $location.url("/user/" + user._id);
            } else {
                vm.alert = "Unable to login";
            }
        }
    }
})();