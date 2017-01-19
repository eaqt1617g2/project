var mongoose = require('mongoose');

var commentSchema = mongoose.Schema({
    content: String,
    author_loginid: String,
    creation_date: {type: Date, default: Date.now},
});


module.exports = mongoose.model('Comment', commentSchema);
