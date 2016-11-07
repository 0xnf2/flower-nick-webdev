module.exports = function(app) {

      var websites = [
                { "_id": "123", "name": "Facebook",    "developerId": "456", "description": "Lorem" },
                { "_id": "234", "name": "Tweeter",     "developerId": "456", "description": "Lorem" },
                { "_id": "456", "name": "Gizmodo",     "developerId": "456", "description": "Lorem" },
                { "_id": "567", "name": "Tic Tac Toe", "developerId": "123", "description": "Lorem" },
                { "_id": "678", "name": "Checkers",    "developerId": "123", "description": "Lorem" },
                { "_id": "789", "name": "Chess",       "developerId": "234", "description": "Lorem" }
            ];

        
    app.post('/api/user/:userId/website', createWebsite);
    app.get('/api/user/:userId/website', findAllWebsitesForUser);
    app.get('/api/website/:websiteId', findWebsiteById);
    app.put('/api/website/:websiteId', updateWebsite);
    app.delete('/api/website/:websiteId', deleteWebsite);

//Create Website (C)
  function createWebsite(req, res) { 
      var userId = req.params.userId;
      var website = res.body;
      website.developerId = userId;
      websites.push(website);
      res.send(website);
   }

//Find All Websites For User (R)
  function findAllWebsitesForUser(req,res)  {
      var userId = req.params.userId;
      var userSites = websites.filter(function(val){return val.developerId === userId;});
      res.send(userSites);
  }

//Find websites by Id (R)
  function findWebsiteById(req,res){
      var websiteId = req.params.websiteId;
      var result = websites.filter(function(val){return val._id === websiteId;});
      if(result.length !== 0){
          res.send(result[0]);
      }else{
          res.send(null);
      }
  }

//Update websites (U)
  function updateWebsite(req,res){
      var websiteId = req.params.websiteId;
      var website = res.body;
      for(var i = 0; i < websites.length; i++){
          if(websites[i]._id === websiteId){
              websites[i] = website;       
              break;       
          }
        }
        res.send(200);
    }

//Delete Website (D)
  function deleteWebsite(req,res){
      var websiteId = req.params.websiteId;
      for(var i = 0; i < websites.length; i++){
          if(websites[i]._id === websiteId){
              websites.splice(i, 1);
              break;
          }
        }
        res.send(200);
    }

}