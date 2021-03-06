var app = angular.module('app', ['ngRoute', 'ngCookies']);
app.config(function ($routeProvider) {
	$routeProvider
  .when('/', { templateUrl: 'partials/hello.html'})
	.when('/made', {templateUrl:'partials/made.html'})
	.when('/dashboard', {templateUrl:'partials/dashboard.html'})
	.when('/orders', {templateUrl:'partials/orders.html'})
  .when('/clients', {templateUrl:'partials/clients.html'})
  .otherwise({
    redirectTo: '/'
  });
// Routes to load your new and edit pages with new and edit controllers attached to them!
});
