import Tweet from '../models/tweet.js';

class TweetRepository {
    async createTweet (data) {
        try {
            const tweet = (await Tweet.create(data)).populate({path: 'hashtags'});
            return tweet;
        } catch (error) {
            console.log(error);
            throw error;
        }
    }

    async getTweetWithOutHashTags (hashtag) {
        try {
            const tweet = await Tweet.find({
                content: hashtag
            });
            return tweet;
        } catch (error) {
            console.log(error);
            throw error;
        }
    }
    async getTweet (id) {
        try {
            const tweet = await Tweet.findById(id).populate({path: 'comments'}).lean();
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
    async getAll (offset, limit) {
        try {
            const tweets = await Tweet.find().skip(offset).limit(limit);
            return tweets;
        } catch (error) {
            console.log(error);
            throw error;
        }
    }
}

export default TweetRepository;