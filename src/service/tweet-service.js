import { TweetRepository, HashtagRepository } from "../repository/index.js";

class TweetService {
    constructor(){
        this.tweetRepository = new TweetRepository();
        this.hashtagRepository = new HashtagRepository();
    }

    async create ( data ) {
        try {
            const content = data.content;
            let tags = content.match(/#([a-zA-Z0-9_])+\w+/g).map(tag => tag.substring(1).toLowerCase()); //this regex extracts the hashtags
            const tweet = await this.tweetRepository.createTweet(data);
            // todo create hashtags and add them here
            /** 
             * 1. bulcreate in mongoose
             * 2. filter title of hashtags based on multiple tags
             * 3. How to add tweet id inside all the hashtags
             */

            // 2. filtering which tweeets should be created
            let alreadyPresentTags = await this.hashtagRepository.findAll(tags);
            let alreadyPresentTitle = alreadyPresentTags.map(tag => tag = tag.title);
            let finalTagsToCreate = tags.filter(tag => !alreadyPresentTitle.includes(tag));
            finalTagsToCreate = finalTagsToCreate.map(tag => {
                return {
                    title: tag,
                    tweets: [tweet.id]
                }
            });
            await this.hashtagRepository.bulkcreate(finalTagsToCreate);
            alreadyPresentTags.forEach(tag => {
                tag.tweets.push(tweet.id);
                tag.save();
            });
            return tweet;
        } catch (error) {
            console.log(error);
            throw error;
        }
    }
}
export default TweetService;