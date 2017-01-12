var mongoose = require('mongoose');

var itemSchema = mongoose.Schema({
    title: String,
    author: {type: mongoose.Schema.Types.ObjectId, ref: 'User'},
    creation_date: {type: Date, default: Date.now},
    likes: { type: Number, default: 0 },
    /*likes: [{type: mongoose.Schema.Types.ObjectId, ref: 'User'}],*/
    pic_id: String,
    comments: [{type: mongoose.Schema.Types.ObjectId, ref: 'Comment'}]
});


module.exports = mongoose.model('Item', itemSchema);
