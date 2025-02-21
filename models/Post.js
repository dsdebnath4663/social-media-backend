const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const postSchema = new Schema({
    userId: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    content: { type: String, required: true },
    createdAt: { type: Date, default: Date.now },
    comments: [
        {
            commentId: { type: Schema.Types.ObjectId, unique: true },
            userId: { type: Schema.Types.ObjectId, ref: 'User' },
            content: { type: String, required: true },
            createdAt: { type: Date, default: Date.now }
        }
    ]
});

module.exports = mongoose.model('Post', postSchema);
