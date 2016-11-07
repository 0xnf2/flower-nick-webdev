(function () {
    angular
        .module("WebAppMaker", [])
        .directive("jga-sortable", jgasortable);
    
    function jgasortable() {
        console.log("Hello from Sortable");
    }
})();