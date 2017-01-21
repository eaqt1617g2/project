var mongoose = require('mongoose');

var commentSchema = mongoose.Schema({
    item: {type: mongoose.Schema.Types.ObjectId, ref: 'Item'},
    content: String,
    author: {type: mongoose.Schema.Types.ObjectId, ref: 'User'},
    creation_date: {type: Date, default: Date.now},
});


module.exports = mongoose.model('Comment', commentSchema);
