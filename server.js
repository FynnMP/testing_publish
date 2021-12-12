var express = require("express")
var bodyParser = require("body-parser")
var app = express()
var port = 3000

app.set("port", port)

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

var chatHistory = []

// Add headers
app.use(function (req, res, next) {
  // Website you wish to allow to connect
  res.setHeader("Access-Control-Allow-Origin", "*")

  // Request methods you wish to allow
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, OPTIONS, PUT, PATCH, DELETE"
  )

  // Request headers you wish to allow
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  )

  // Pass to next layer of middleware
  next()
})


// main function of server
app.get("/", function (req, res, next) {
  res.send(chatHistory.sort((a, b) => a.id - b.id).reverse())
})

app.post("/", function (req, res, next) {

  if (req.body.message.localeCompare("DELETEALLFYNN123") == 0) {
    chatHistory = [];    
  }
  else {
    var date = new Date()

    chatHistory.push({
      id: date.valueOf(),
      message: req.body.message,
      nickname: req.body.user,
      time: req.body.time,
      color: req.body.color
    })
    res.send(chatHistory.sort((a, b) => a.id - b.id).reverse())
    console.log(chatHistory.sort((a, b) => a.id - b.id).reverse())
  }
  
})

app.listen(app.get("port"), function () {
  console.log("Node app is running on port", app.get("port"))
})
