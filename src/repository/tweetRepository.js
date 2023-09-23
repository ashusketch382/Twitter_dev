const Tweet = require('../models/tweet');

class TweetRepository {
    async createTweet (data) {
        try {
            const tweet = (await Tweet.create(data)).populate({path: 'comments'});
            return tweet;
        } catch (error) {
            console.log(error);
            throw error;
        }
    }

    async getTweet (id) {
        try {
            const tweet = await Tweet.findById(id).populate({path: 'comments'});
            return tweet;
        } catch (error) {
            console.log(error);
            throw error;
        }
    }

    async updateTweet (id, data) {
        try {
            const tweet = await Tweet.findByIdAndUpdate(id, data, {new: true});
            return tweet;
        } catch (error) {
            console.log(error);
            throw error;
        }
    }

    async deleteTweet (id) {
        try {
            const tweet = await Tweet.findByIdAndRemove(id);
            return tweet;
        } catch (error) {
            console.log(error);
            throw error;
        }
    }
}

module.exports = TweetRepository;