require('dotenv').config()


const MongoClient = require('mongodb').MongoClient;
const uri = 'mongodb+srv://prac4:ouchcouch@cluster0.gjjjp9c.mongodb.net/?retryWrites=true&w=majority'
const client = new MongoClient(uri, {useNewUrlParser: true})

client.connect((err,db) => {
            if(!err) {
                console.log('MongoDB Connected')
            }
            else {
                console.log("DB Error: ", err);
                process.exit(1);
    }
})

module.exports = client;