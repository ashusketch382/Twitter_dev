const express = require("express");
const app = express();
const connect = require("./config/database");

const PORT = 3000;
const Tweet = require("./models/tweet");
const Comment = require("./models/comment");
const TweetRepository = require('./repository/tweetRepository');
const tweetRepository = new TweetRepository();
app.listen(PORT, async () => {
    console.log(`server started on port ${PORT}`);
    await connect();
    console.log("mongo db connected");
    // const tweet = await tweetRepository.createTweet({
    //     content: "now it's working",
    //     userEmail: 'a@g.com',
    // });
    // console.log(tweet);
    // const comment = await Comment.create({
    //     content: 'working comment',
    //     userEmail: 'a@i.com'
    // });

    // tweet.comments.push(comment);
    // await tweet.save();    

    // const tweet = await tweetRepository.getAll(4,3);
    const tweet = await tweetRepository.createTweet({
        content: "Now this time came with hooks"
    });
    console.log(tweet);

});
