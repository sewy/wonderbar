app.controller('userController', ['$routeParams', '$scope', '$cookies', '$location', 'bucketsFactory', function(rp, $scope, $cookies, $location, bucketsFactory){
	index = function(){
		$scope.userid = $cookies.get('userid');
		bucketsFactory.getUser(rp.id, function(data){
			$scope.user = data;
			console.log(data)
		});
	}
	$scope.logout = function(){
		$cookies.remove('username');
		$cookies.remove('userid');
		$location.url('/')
	}
	$scope.check = function(ticked, buckid){
		if($scope.userid == $scope.user._id){
			var buck = {id:buckid, ticked:ticked.val};
			bucketsFactory.updateBucket(buck);
		}
		index();
	}
	
	index();
}]);