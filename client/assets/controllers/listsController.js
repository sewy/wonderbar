app.controller('listsController', ['$scope', '$cookies', '$location', 'bucketsFactory', function($scope, $cookies, $location, bucketsFactory){
	index = function(){
			$scope.username = $cookies.get('username');
			$scope.userid = $cookies.get('userid');
			if($scope.username == undefined){
				$location.url('/');
			}
			bucketsFactory.getUsers(function(data){
				$scope.users = data;
			});
			bucketsFactory.getBuckets(function(data){
				$scope.buckets = data;
				console.log(data)
			});
	}
	$scope.createBucket = function(bucket){
		bucket.username = $cookies.get('username');
		bucket._user = $cookies.get('userid');
		bucketsFactory.createBucket(bucket, function(){
			index();
		});
		;
	}
	$scope.logout = function(){
		$cookies.remove('username');
		$cookies.remove('userid');
		$location.url('/');
	}
	index();
}]);