app.factory('bucketsFactory',['$http', function($http){
	function bucketsFactory(){
		this.createUser = function(user , callback){
			console.log(user);
			$http.post('/createUser', user).then(function(returnData){
				callback(returnData.data);
			})
		}
		this.getUsers = function(callback){
			$http.get('/getUsers').then(function(returnData){
				callback(returnData.data)
			})
		}
		this.getUser = function(id, callback){
			console.log(id)
			$http.get('/user/'+ id).then(function(returnData){
				callback(returnData.data);
			})
		}
		this.createBucket = function(bucket, callback){
			console.log(bucket);
			$http.post('/createBucket', bucket).then(function(){
				callback();
			})

		}
		this.getBuckets = function(callback){
			console.log('getting buckets')
			$http.get('/getBuckets').then(function(returnData){
				callback(returnData.data)
			})
		}
		this.updateBucket = function(bucket){
			$http.post('/updateBucket', bucket)
		}
	}
	return new bucketsFactory();
}])