app.controller('clientsController', ['$scope', '$location', '$cookies', '$routeParams', function($scope, $location, $cookies, $routeParams){

  console.log('clients controller loaded');

  $scope.users = {};

  var index = function(){
    console.log('in index fx');

    var showUsers = function(){
      userFactory.showAll(function(data){
        $scope.users = data.data.users;
        console.log('all the users:', data.data.users);
      })
    }

    showUsers();
  }

  index();
  
}])
