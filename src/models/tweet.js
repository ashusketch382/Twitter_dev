import mongoose from 'mongoose';

const tweetSchema = new mongoose.Schema({
    content: {
        type: String,
        required: true,
        max: [250, "Make it less than 250 char right now, other wise i will kill you right now,"]
    },
    hashtags: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Hashtag'
    }]
},{timestamps: true});

const Tweet = mongoose.model('Tweet', tweetSchema)
export default Tweet;