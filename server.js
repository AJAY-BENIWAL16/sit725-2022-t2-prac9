var express = require("express")
var app = express()
var cors = require("cors")
let projectCollection;

app.use(express.static(__dirname+'/public'))
app.use(express.json());
app.use(express.urlencoded({extended: false}))
app.use(cors())

// mongodb connection
const MongoClient = require('mongodb').MongoClient;

// database connection
const uri = 'mongodb+srv://prac4:ouchcouch@cluster0.gjjjp9c.mongodb.net/?retryWrites=true&w=majority'
const client = new MongoClient(uri,{ useNewUrlParser: true })

// insert project...
const insertProjects = (project,callback) => {
  projectCollection.insert(project,callback);
}
  
// get project...
const getProjects = (callback) => {
  projectCollection.find({}).toArray(callback);
}
  

const createColllection = (collectionName) => {
  client.connect((err,db) => {
  projectCollection = client.db().collection(collectionName);
  if(!err) {
  console.log('MongoDB Connected')
  }
  else {
  console.log("DB Error: ", err);
  process.exit(1);
  }
  })
}
  

 
const cardList = [
  {
   title: "DOGY 2",
 image: "images/doge1.jpg",
 link: "About DOGY 2",
 desciption: "Demo desciption about DOGY 2"
 },

 {
 title: "DOGY 3",
 image: "images/doge2.jpg",
 link: "About DOGY 3",
 desciption: "Demo desciption about DOGY 3"
 }
]
// const addNumbers = (number1, number2) =>
//  {
//     var num1 = parseInt(number1)
//      var num2 = parseInt(number2)
//      var result = num1+num2;
//      return result;
//         }

//  app.get("/addTwoNumbers", (req,res) => {
//       var number1 = req.query.number1;
//       var number2 = req.query.number2;
//       var result = addNumbers(number1, number2)
//       res.json({statusCode: 200, data: result, message:'Success'})
//      })
            

  
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

  

var port = process.env.port || 3000;
app.listen(port,()=>{
    console.log("App listening to: http://localhost:"+port)
    createColllection("Pets")
})