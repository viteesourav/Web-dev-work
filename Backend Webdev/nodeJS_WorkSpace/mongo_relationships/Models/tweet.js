//mongoose code to see mongoose Relationships : one to many
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
mongoose.set('strictQuery', true); //this suppress the error

//connection with the db
mongoose.connect('mongodb://127.0.0.1:27017/mongoRelationship')
    .then(()=>{
        console.log("Successfully connected to the MongoDB");
    })
    .catch(()=>{
        console.log('error while connecting to the DB');
    })

//parent entity
const tweetUserSchema = new Schema({
    username: String,
    age: Number
})

//child entity
const tweetSchema = new Schema({
    text: String,
    likes: Number,
    user: {
        type: Schema.Types.ObjectId,  //refrencing the parent id in the child entity.
        ref: 'TweetUser'
    }
})

const TweetUser = mongoose.model('TweetUser', tweetUserSchema);
const Tweet = mongoose.model('Tweet', tweetSchema);

const addUserAndTweet = async() =>{
    const user = new TweetUser({
        username: 'testboi69',
        age: 29
    });
    const tweet = new Tweet({
        text: 'Hey Hey Girl Where are you ?',
        likes: 345
    })
    tweet.user = user;
    await user.save();
    await tweet.save();
}

// addUserAndTweet();

const addComment = async (id)=>{
    const userData = await TweetUser.findById(id);
    const tweet = new Tweet({
        text: 'Another Tweet, where are you ?',
        likes: 45
    })
    tweet.user = userData;
    const resp = await tweet.save();
    console.log(resp);
}

// addComment("63cc205f70fe4f21aa16ccd2");

//Populating the tweet data with the complete user details
const showAllTweets = async() =>{
    const tweetData = await Tweet.find({}).populate('user');
    console.log(tweetData);
}

showAllTweets();