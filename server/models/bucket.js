var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var UserSchema = new mongoose.Schema({
	name: {type: String, required: true},
	buckets: [{type: Schema.Types.ObjectId, ref: 'Bucket'}]
}, {timestamps: true });
var BucketSchema = new mongoose.Schema({
	_user: {type: Schema.Types.ObjectId, ref: 'User'},
	username: String,
	title: {type: String, minlength: 5, required: true},
	description: {type: String, minlength: 10, required: true},
	checkbox: String
}, {timestamps: true });
mongoose.model('User', UserSchema);
mongoose.model('Bucket', BucketSchema);