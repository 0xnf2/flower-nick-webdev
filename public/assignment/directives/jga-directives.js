(function () {
    angular
        .module("WebAppMaker", [])
        .directive("jga-sortable", jgasortable);
    
    function jgasortable($http) {
        $(function () {
            var url = "/page/:pageId/widget?initial=index1&final=index2";
            var sortable = $("jga-sortable");
            let initial = -1;
            sortable.sortable({
                start:function(event, ui){
                    initial = $(ui.item).index();
                },
                update:function(event,ui){
                    let final = $(ui.item).index();
                    var url = "/page/"+pageId+"/widget?initial="+initial+"&final="+final;
                    $http.get(url);
                }
            });
        });
    }
})();