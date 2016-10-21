(function() {
    angular
  .module("WebAppMaker")
  .factory("UserService", UserService);
    function UserService() {
      var users = [
            {_id: "123", username: "alice",    password: "alice",    firstName: "Alice",  lastName: "Wonder"  },
            {_id: "234", username: "bob",      password: "bob",      firstName: "Bob",    lastName: "Marley"  },
            {_id: "345", username: "charly",   password: "charly",   firstName: "Charly", lastName: "Garcia"  },
            {_id: "456", username: "jannunzi", password: "jannunzi", firstName: "Jose",   lastName: "Annunzi" }
        ];

      var api = {
            "createUser"   : "createUser",
            "findUserById" : "findUserById",
            "findUserByUsername" : "findUserByUsername",
            "findUserByCredentials" : "findUserByCredentials",
            "updateUser": "updateUser",
            "deleteUser" : "deleteUser"    
        };
  return api;

  function createUser(user) { 
      users.push(user);
   }

  function findUserById(id) { 
      var result = users.filter(function(val){return val._id === id})
      if(result.length !== 0){
          return result[0];
      }else{
          return null;
      }
  }

  function findUserByUsername(username){
      var result = users.filter(function(val){return val.username === username})
      if(result.length !== 0){
          return result[0];
      }else{
          return null;
      }
  }

  function findUserByCredentials(username, password){
      var result = users.filter(function(val){return val.username === username && val.password === password})
      if(result.length !== 0){
          return result[0];
      }else{
          return null;
      }
  }

  function updateUser(userId, user){
      for(var i = 0; i < users.length; i++){
          if(users[i]._id == userId){
              users[i] = user;
              return;
          }
        }
    }

  function deleteUser(userId){
      for(var i = 0; i < users.length; i++){
          if(users[i]._id == userId){
              users.splice(i, 1);
              return;
          }
        }
    }
}
})();