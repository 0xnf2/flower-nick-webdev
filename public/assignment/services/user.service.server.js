module.exports = function(app) {

      var users = [
            {_id: "123", username: "alice",    password: "alice",    firstName: "Alice",  lastName: "Wonder"  },
            {_id: "234", username: "bob",      password: "bob",      firstName: "Bob",    lastName: "Marley"  },
            {_id: "345", username: "charly",   password: "charly",   firstName: "Charly", lastName: "Garcia"  },
            {_id: "456", username: "jannunzi", password: "jannunzi", firstName: "Jose",   lastName: "Annunzi" }
        ];

        
    app.post('/api/user', createUser);
    app.get('/api/user?username=username', findUserByUsername);
    app.get('/api/user?username=username&password=password', findUserByCredentials);
    app.get('/api/user/:uid',findUserById);
    app.put('/api/user/:uid', updateUser);
    app.delete('/api/user/:uid', deleteUser);

    //Create user (C)
    function createUser(req, res){
        var user = req.body;
        user._id = (new Date()).getTime();
        users.push(user);
        res.send(user);
    }

//Get User by Id (R)
  function findUserById(res,req) { 
      var userId = parseInt(req.params.uid);
      var result = users.filter(function(val){return val._id === userId;});
      if(result.length !== 0){
          res.send(result[0]);
      }else{
          res.send(null);
      }
  }

  //Get User By Username (R)
  function findUserByUsername(req, res){
      var params = req.params;
      var username = params.username;
      var result = users.filter(function(val){return val.username === username;});
      if(result.length !== 0){
          res.send(result[0]);
          return result[0];
      }else{
          res.send(null);
      }
  }

//Get User by Credentials (R)
  function findUserByCredentials(req, res){
      var params = req.params;
      var username = params.username;
      var password = params.password;
      var result = users.filter(function(val){return val.username === username && val.password === password;});
      if(result.length !== 0){
          res.send(result[0]);
      }else{
          res.send(null);
      }
  }

//Update User (U)
  function updateUser(req, res){
      var user = req.body;
      var userId = req.params.uid;
      for(var i = 0; i < users.length; i++){
          if(users[i]._id === userId){
              users[i] = user;
              return;
          }
        }
        res.send(200);
    }

    //Delete User (D)
  function deleteUser(req, res){
      var userId = res.params.uid;
      for(var i = 0; i < users.length; i++){
          if(users[i]._id === userId){
              users.splice(i, 1);
              return;
          }
        }
    }

}