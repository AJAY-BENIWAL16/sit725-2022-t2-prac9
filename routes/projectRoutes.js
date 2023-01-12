var express = require("express")
var router = express.Router();  
let controller = require("../controller")



//post api....
router.post('/',(req,res) => {
    controller.projectController.createProjects(req, res)
   
})


router.get('/',(req,res) => {
    controller.projectController.retrieveProjects(req,res)
   
})

module.exports = router; 





//setTimeout(() => {
//    projectCollection = client.mongoClient.db().collection("Projects");    
//}, 2000)

//insert project
//const insertProjects = (project,callback) => {
//        projectCollection.insert(project,callback);
//    }

    //post api
//    router.post('/',(req,res) => {
//        controller.projectController.createProjects(req, res)
 //           console.log("New Project added", req.body)
 //           var newProject = req.body;
 //           insertProjects(newProject,(err,result) => {
 //               if(err) {
 //                   res.json({statusCode: 400, message: err})
 //               }
 //               else {
 //                   res.json({statusCode: 200, message:"Project Successfully added", data: result})
 //               }
 //           })
  //      }) 

        // get project...
//const getProjects = (callback) => {
//        projectCollection.find({}).toArray(callback);
//    }

    //router.get('/',(req,res) => {
      //controller.projectController.retrieveProjects(req, res)
  //      getProjects((err,result) => {
 //           if(err) {
 //               res.json({statusCode: 400, message: err})
 //           }
 //           else {
 //               res.json({statusCode: 200, message:"Success", data: result})
 //           }
 //       })
  //  }) 

  