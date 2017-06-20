app.controller('dashboardController', ['$scope', '$location', '$cookies', '$routeParams', 'userFactory', function($scope, $location, $cookies, $routeParams, userFactory){

  console.log('dashboard controller loaded');

  $scope.users = {};

  var index = function(){
    var cookies = $cookies.getAll();
    // console.log('cookies: ', cookies);
    if (!('uid' in cookies)){
      $location.url('/')
      console.log('user not logged in');
    } else {
      var userCookie = $cookies.get('uid');
      // console.log(userCookie);
      var showUser = function(id){
        userFactory.show(id, function(data){
          $scope.user = data.data;
          console.log('data is:', data.data);
        })
      };

      // var showItems = function(id){
      //   itemFactory.index(id, function(data){
      //     $scope.items = data.data.items;
      //     console.log('all the items:', data.data.items);
      //   });
      // }


      showUser(userCookie);
      // showUsers();
      // showItems($cookies.get('uid'));
    }
  }

  index();

  $scope.logoutUser = function(){
    var cookies = $cookies.getAll();
    angular.forEach(cookies, function (v, k) { $cookies.remove(k); });
    $location.url('/');
    // console.log(cookies);
  }

}])
