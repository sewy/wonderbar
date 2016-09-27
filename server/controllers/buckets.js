var mongoose = require('mongoose');
var Users = mongoose.model('User');
var Buckets = mongoose.model('Bucket');

function usersController(){
	this.getUsers = function(req, res){
		Users.find({}, function(err, users){
			if(err){
				console.log('Error getting Users');
				res.json({Error:'error'});
			}else{
				console.log('Users retreived');
				res.json(users);
			}
		})
	}
	this.createUser = function(req, res){
		var user = new Users({name:req.body.user, buckets:[]});
		user.save(function(err){
			if(err){
				console.log('Could not create User');
				res.json({Error:'error'});
			}else{
				console.log('User Saved: ', user);
				res.json(user);
			}
		})
	}
	this.createBucket = function(req, res){
		console.log(req.body)
		Users.findOne({_id:req.body._user}, function(err, mainuser){
			var bucket = new Buckets({username:req.body.username, title:req.body.title, description:req.body.description, _user:req.body._user, checkbox:'no'});
			if(req.body.tagged!==undefined){
				Users.findOne({_id:req.body.tagged}, function(err, user){
					bucket.save(function(err){
						mainuser.buckets.push(bucket);
						mainuser.save(function(err){
							user.buckets.push(bucket);
							user.save(function(err){
								if(err){
									console.log('Error tagging/saving bucket');
									res.json({error:'error'});
								}else{
									console.log('Bucket tagged and created');
									res.json({success:'success'});
								}
							})
						})
					})
				})
			}else{
				bucket.save(function(err){
					mainuser.buckets.push(bucket);
					mainuser.save(function(err){
					if(err){
						console.log('Error creating bucket:', err);
						res.json({error:'error'});
					}else{
						console.log('Bucket created!');
						res.json({success:'success'});
					}
					})
				})
			}
		})
	}
	this.getBuckets = function(req, res){
		Buckets.find({}).populate('_user').exec(function(err, buckets){
			if(err){
				console.log('Error finding buckets:', err);
				res.json({error:'error'});
			}else{
				console.log('Buckets Found');
				res.json(buckets);
			}
		})
	}
	this.getUser = function(req, res){
		Users.findOne({_id:req.params.id}).populate('buckets').populate('buckets._user').exec(function(err, users){
			if(err){
				console.log(err)
				res.json({err:'err'})
			}else{
				res.json(users)
			}
		})
	}
	this.updateBucket = function(req, res){
		console.log(req.body)
		Buckets.findOne({_id:req.body.id}, function(err, bucket){
			if(req.body.ticked == 1){
				bucket.checkbox = 'yes';
				bucket.save(function(err){
					if(err){
						console.log(err);
						res.json({err:'err'});
					}else{
						console.log('Ticked')
						res.json({success:'success'})
					}
				});
			}	
		})
	}
}

module.exports = new usersController();
