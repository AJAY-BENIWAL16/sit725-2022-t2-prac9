let projectModel = require("../models/project")

//retrieve project.
const retrieveProjects = (req, res) => {
    projectModel.getProjects((err, result) => {
            if (err) {
                res.json({ statusCode: 400, message: err })
            }
            else {
                res.json({ statusCode: 200, message: "Success", data: result })
            }
        })
    }
//create project

const createProjects = (req, res) => {
    console.log("A New Project has been added", req.body)
    var newProject = req.body;
    projectModel.insertProjects(newProject, (err, result) => {
        if (err) {
            res.json({ statusCode: 400, message: err })
        }
        else {
            res.json({ statusCode: 200, message: "Project Added Successfully ", data: result })
        }
    })
}





    module.exports={createProjects, retrieveProjects}




    // let client = require("../dbConnect");
// let projectsCollection;

// setTimeout(() => {
//   projectsCollection = client.mongoClient.db().collection("projects");
// }, 2000)

// // insert project...
// const insertProjects = (project,callback) => {
//     projectCollection.insert(project,callback);
// }

// // get project...
// const getProjects = (callback) => {
//     projectCollection.find({}).toArray(callback);
// }

