import TweetService from "../service/tweet-service.js";

const tweetService = new TweetService();

const createTweet = async (req,res) =>{
    try {
        const response = tweetService.create(req.body);
        return res.status(200).json({
            data: response,
            message: "succesfully created tweet",
            success: true,
            err: {}
        });
    } catch (error) {
        return res.status(500).json({
            data: {},
            message: "something went wrong",
            success: false,
            err: error
        });
    }
}

export default createTweet;