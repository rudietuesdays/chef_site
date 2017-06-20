app.factory('userFactory', ['$http', function($http){

  var users = [];
  var user = {};
  var factory = {};

  factory.index = function(callback) {
    $http.get('/')
    .then(function(returned_data){
      if(typeof(callback) == 'function'){
        callback(returned_data);
      }
    })
  }

  factory.register = function(newUser, callback){
    $http.post('/users', newUser)
    .then(function(returned_data){
      if(typeof(callback)== 'function'){
        callback(returned_data);
        if (returned_data.data.errors){
          console.log('ERRORS: ', returned_data.data);
        } else {console.log('user successfully created');}
      }
    })
  }

  factory.login = function(user, callback){
    $http.post('/login', user)
    .then(function(returned_data){
      if(typeof(callback)== 'function'){
        callback(returned_data);
        if(returned_data.errors){
          console.log('ERRORS: ', returned_data.data);
        } else {console.log('returned data: ', returned_data);}
      }
    })
  }

  factory.show = function(uid, callback){
    $http.get('/users/' + uid)
    .then(function(returned_data){
      if(typeof(callback) == 'function'){
        callback(returned_data);
      }
    })
  }

  factory.showAll = function(callback){
    $http.get('/users/')
    .then(function(returned_data){
      if(typeof(callback) == 'function'){
        callback(returned_data);
      }
    })
  }

  return factory;
}])
