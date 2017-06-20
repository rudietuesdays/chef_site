app.controller('registerController', ['$scope', '$location', '$cookies', '$routeParams', 'userFactory', function($scope, $location, $cookies, $routeParams, userFactory){
  console.log('registration controller loaded');

  $scope.newUser = {};
  $scope.errors = {};

  $scope.createUser = function(){
    if($scope.newUser.password != $scope.newUser.pw_confirm){
      $scope.pw_error =  "passwords do not match";
    } else {
      userFactory.register($scope.newUser, function(data){
        // console.log(data);
        if (data.data.errors){
          $scope.errors = data.data.errors
        } else {
          // console.log(data);
          $cookies.put('uid', data.data._id);
          var userCookie = $cookies.get('uid');
          console.log('user cookie:', userCookie);
          $scope.newUser = {};
          $location.url('/dashboard');
        }
      })
    }

  }
}])
