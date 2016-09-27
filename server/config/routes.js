var buckets = require('../controllers/buckets.js');
module.exports = function(app){
	app.get('/getUsers', buckets.getUsers);
	app.get('/getBuckets', buckets.getBuckets);
	app.get('/user/:id', buckets.getUser);
	app.post('/createUser', buckets.createUser);
	app.post('/createBucket', buckets.createBucket);
	app.post('/updateBucket', buckets.updateBucket);
}