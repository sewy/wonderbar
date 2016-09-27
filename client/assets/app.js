var app = angular.module('app', ['ngRoute', 'ngCookies', 'ngMessages']);
app.config(function($routeProvider){
	$routeProvider.when('/',{
		templateUrl: 'partials/main.html',
		controller: 'indexController'
	});
	$routeProvider.when('/bucketlist',{
		templateUrl: 'partials/bucketlists.html',
		controller: 'listsController'
	});
	$routeProvider.when('/user/:id',{
		templateUrl: 'partials/user.html',
		controller: 'userController'
	});
	$routeProvider.otherwise({
		redirectTo: '/'
	});
});