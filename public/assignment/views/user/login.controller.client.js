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
            let promise = UserService.findUserByCredentials(username, password);
            promise
                .success(function(user){
                    $location.url("/user/" + user._id);
            })
            .error(function(err){
                     vm.alert = "Unable to login: " + err;
            });
        }
    }
})();