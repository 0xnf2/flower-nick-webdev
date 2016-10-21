(function() {
  angular
    .module("WebAppMaker")
    .config(Config);
    function Config($routeProvider) {
        $routeProvider
        //User Views
            .when("/login", { //login
                templateUrl: "views/user/login.view.client.html",
            })
            .when("/register", { //Register
                templateUrl: "views/user/register.view.client.html"
            })
            .when("/user/:uid", { //profile
                templateUrl: "views/user/profile.view.client.html"
            })
            //Website views
            .when("/user/:uid/website", { //website-list
                templateUrl: "views/website/website-list.view.client.html",
            })
            .when("/user/:uid/website/new", { //website-new
                templateUrl: "views/website/website-new.view.client.html"
            })
            .when("/user/:uid/website/:wid", { //website-edit
                templateUrl: "views/website/website-edit.view.client.html"
            })
             //Page Views
            .when("/user/:uid/website/:wid/page", { //page-list
                templateUrl: "views/page/page-list.view.client.html"
            })
            .when("/user/:uid/website/:wid/page/new", { //page-new
                templateUrl: "views/page/page-new.view.client.html"
            })
            .when("/user/:uid/website/:wid/page/:pid", { //page-edit
                templateUrl: "views/page/page-edit.view.client.html"
            })
            //Widget Views
            .when("/user/:uid/website/:wid/page/:pid/widget", { //Widget-List
                templateUrl: "views/widget/widget-list.view.client"
            })
            .when("/user/:uid/website/:wid/page/:pid/widget/new", { //Widget-new
                templateUrl: "views/widget/widget-choose.view.client"
            })
            .when("/user/:uid/website/:wid/page/:pid/widget/:wgid", { //Widget-edit
                templateUrl: "views/widget/widget-edit.view.client"
            })
            .otherwise({
                redirectTo: "/login"
            });
    }
})();