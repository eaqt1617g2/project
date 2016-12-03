var mongoose = require('mongoose');

var commentSchema = mongoose.Schema({
    content: String,
    author: {type: mongoose.Schema.Types.ObjectId, ref: 'User'},
    creation_date: {type: Date, default: Date.now},
});


module.exports = mongoose.model('Comment', commentSchema);
