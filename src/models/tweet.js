const mongoose = require('mongoose');

const tweetSchema = new mongoose.Schema({
    content: {
        type: String,
        required: true
    },
    userEmail: {
        type: String
    },
    comments: [
        {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Comment"
    }
]

},{timestamps: true});

tweetSchema.virtual('contentEmail').get(function () {
    return `${this.content} created by user: ${this.userEmail}`;
});

tweetSchema.pre('save', function(next){
    console.log("Inside hook");
    this.content = this.content + "....";
    next();
});
const Tweet = mongoose.model('Tweet', tweetSchema)
module.exports = Tweet;