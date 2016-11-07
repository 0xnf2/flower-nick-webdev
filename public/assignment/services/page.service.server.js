module.exports = function(app) {

      var pages = [
            { "_id": "321", "name": "Post 1", "websiteId": "456", "description": "Lorem" },
            { "_id": "432", "name": "Post 2", "websiteId": "456", "description": "Lorem" },
            { "_id": "543", "name": "Post 3", "websiteId": "456", "description": "Lorem" }
        ];

        
    app.post('/api/website/:websiteId/page', createPage);
    app.get('/api/website/:websiteId/page', findAllPagesForWebsite);
    app.get('/api/page/:pageId', findPageById);
    app.put('/api/page/:pageId', updatePage);
    app.delete('/api/page/:pageId', deletePage);

//Create Page (C)
  function createPage(req,res){ 
      var wid = req.params.websiteId;
      var page = req.body;
      page.websiteId = wid;
      pages.push(page);
      res.send(page);
   }

//Find All Pages For WebsiteId (R)
  function findAllPagesForWebsite(req,res)  { 
      var websiteId = req.params.websiteId;
      res.send(pages.filter(function(val){return val.websiteId === websiteId;}));
  }

//Find page by Id (R)
  function findPageById(req,res){
      var pageId = req.params.pageId;
      var result = pages.filter(function(val){return val._id === pageId;});
      if(result.length !== 0){
          res.send(result[0])
      }else{
          res.send(null);
      }
  }

//Update websites (U)
  function updatePage(req,res){
      var pageId = req.params.pageId;
      var page = req.body;
      for(var i = 0; i < pages.length; i++){
          if(pages[i]._id === pageId){
              pages[i] = page;
              break;
          }
        }
        res.send(200);
    }

//Delete Website (D)
  function deletePage(req,res){
      var pageId = req.params.pageId;
      for(var i = 0; i < pages.length; i++){
          if(pages[i]._id === pageId){
              pages.splice(i, 1);
              break;
          }
        }
        res.send(200);
    }

}