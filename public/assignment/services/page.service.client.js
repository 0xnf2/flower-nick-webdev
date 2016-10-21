(function() {
    angular
  .module("WebAppMaker")
  .factory("PageService", PageService);
    function PageService() {
      var pages = [
            { "_id": "321", "name": "Post 1", "websiteId": "456", "description": "Lorem" },
            { "_id": "432", "name": "Post 2", "websiteId": "456", "description": "Lorem" },
            { "_id": "543", "name": "Post 3", "websiteId": "456", "description": "Lorem" }
        ];

      var api = {
            "createPage"   : "createPage",
            "findPageByWebsiteId" : "findPageByWebsiteId",
            "findPageById" : "findPageById",
            "updatePage" : "updatePage",
            "deletePage": "deletePage",
        };
  return api;

  function createPage(websiteId, page){ 
      page.websiteId = websiteId;
      pages.push(page);
   }

  function findPageByWebsiteId(websiteId)  { 
      var result = pages.filter(function(val){return val.websiteId === websiteId})
      if(result.length !== 0){
          return result[0];
      }else{
          return null;
      }
  }

  function findPageById(pageId){
      var result = pages.filter(function(val){return val._id === pageId})
      if(result.length !== 0){
          return result[0];
      }else{
          return null;
      }
  }

  function updatePage(pageId, page){
      for(var i = 0; i < pages.length; i++){
          if(pages[i]._id == pageId){
              pages[i] = page;
              return;
          }
        }
    }

  function deletePage(pageId){
      for(var i = 0; i < pages.length; i++){
          if(pages[i]._id == pageId){
              pages.splice(i, 1);
              return;
          }
        }
    }
}
})();