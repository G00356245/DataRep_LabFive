const express = require('express');//server code to use express
const app = express();//server code to use express
const port = 3000;//server code to use express
const path = require('path');// using path package, it will determine what directory that i am in.
const bodyParser = require("body-parser");//using the bod-parser package for the post method.

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

app.get('/', (req, res) => {
  res.send('Welcome to Data Representation & Querying')
}) // creating roots
//get is listening to http get request 
//res will send a respond to the request

app.get('/hello/:name', (req, res) => {
  console.log(req.params.name);
  res.send('Hello ' + req.params.name);
})  // changed the url of the get method and res will send back hello with a name that you typed in.

app.get('/api/movies', (req, res) => {
  const mymovies = [
    {
      "Title": "Avengers: Infinity War",
      "Year": "2018",
      "imdbID": "tt4154756",
      "Type": "movie",
      "Poster": "https://m.media-amazon.com/images/M/ MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_SX300.jpg"
    },
    {
      "Title": "Captain America: Civil War",
      "Year": "2016",
      "imdbID": "tt3498820",
      "Type": "movie",
      "Poster": "https://m.media-amazon.com/images/M/ MV5BMjQ0MTgyNjAxMV5BMl5BanBnXkFtZTgwNjUzMDkyODE@._V1_SX300.jpg"
    }
  ];
  res.json({ movies: mymovies });
}); //this method sends back json data to the users.

app.get('/test', (req, res) => {
  res.sendFile(__dirname + '/index.html');
})  // this will access the path package and using sendfile to access the index.html page.

app.get('/name', (req, res) => {
  res.send('Hello ' + req.query.fname + ' ' + req.query.lname)
})  // this method will send back the first name and last name that has been inputted into the form.

app.post('/name', (req, res) => {
  res.send('Hello ' + req.body.fname + ' ' + req.body.lname);
})  // this method will listen to the post request and send back the post data.

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})  //code to set up my web to port, localhost 3000