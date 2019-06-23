// #import packages to variables. Going to need for application
const express = require('express');
// express is a framework for node.js that makes it easy to create a server
const serveStatic = require('serve-static')
const path = require('path')
const categoriesData = require('./data/categories.js')
// copies the file from data folder

//#Create the express app
const app = express()

//#create middleware to handle the serving of the app
app.use('/', serveStatic(path.join(__dirname, '/public')))
app.get('/api/categories', function(req, res){
    res.json(categoriesData)
})
app.get('*', function(req, res){
    res.sendFile(__dirname + '/public/index.html')
    // anything that doesnt match the root directory send it to the home page
    // react router allows it to control the components
})
// Setting up a route. dirname is the director name
// Server running with express. Whenver you see the / you are serving the public folder as the root directory or route


// #create default port to serve the app
const port = process.env.PORT || 5000;
// local host is 3000 but server is 5000.
// publishing to heroku or your own server you use the port 5000

app.listen(port)
// app.listen(port) tells express to listen to the port variable that has the number


console.log(`server started on port ${port}`)