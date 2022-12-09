var express = require("express")
var app = express()
var cors = require('cors')
let projectCollection;

app.use(express.static(__dirname+'/public'))
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors())

// mongoDB connection
const MongoClient = require('mongodb').MongoClient;
const uri = 'mongodb+srv://AJAY:QWERTY123@cluster0.jsj7ibs.mongodb.net/test'
const client = new MongoClient(uri, {useNewUrlParser: true})

const createCollection = (collectionName) => {
  client.connect((err,db) => {
    projectCollection = client.db().collection(collectionName);
    if(!err){
      console.log('MongoDb Connected')
    }
    else{
      console.log("DB Error:",err);
      process.exit(1);
    }
  })
}

// insert project...
const insertProjects = (project,callback) => {
   projectCollection.insert(project,callback);
  }
  


// pOST API
app.post('/api/projects',(req,res) => {
   console.log("New Project added", req.body)
   var newProject = req.body;
   insertProjects(newProject,(err,result) => {
   if(err) {
   res.json({statusCode: 400, message: err})
   }
   else {
   res.json({statusCode: 200, message:"Project Successfully added", data: result})
   }
   })
  })
  
  


// const cardList = [
//      {
//        title: "DOGY 2",
//        image: "images/doge1.jpg",
//        link: "About DOGY 2",
//        desciption: "Demo desciption about DOGY 2"
//      },
//      {
//        title: "DOGY 3",
//        image: "images/doge2.jpg",
//        link: "About DOGY 3",
//        desciption: "Demo desciption about DOGY 3"
//      }
//  ]



// get project...
const getProjects = (callback) => {
   projectCollection.find({}).toArray(callback);
  }
  

 app.get('/api/projects',(req,res) => {
   getProjects((err,result) => {
   if(err) {
   res.json({statusCode: 400, message: err})
   }
   else {
   res.json({statusCode: 200, message:"Success", data: result})
   }
   })
  })
  

var port = process.env.port || 3000;​

app.listen(port,()=>{​

    console.log("App listening to: http://localhost: "+port)
    createCollection('Pets')​

})​