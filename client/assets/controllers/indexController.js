app.controller('indexController', ['$scope', '$cookies', '$location', 'bucketsFactory', function($scope, $cookies, $location, bucketsFactory){
	$scope.login = function(user){
		if(user.user.length >= 3){
			bucketsFactory.createUser(user, function(data){
			$cookies.put('userid', data._id)	
			$cookies.put('username', user.user);
			$location.url('/bucketlist');
			});
		}
	}
}]);