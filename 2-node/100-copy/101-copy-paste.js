const express = require('express')
var fs = require("fs")
var bodyParser = require('body-parser')
var multer = require('multer') // v1.0.5
var upload = multer() // for parsing multipart/form-data

const app = express()
const port = 3000

app.use(bodyParser.json()) // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded

//app.use("static", express.static('static'))


app.get('/copy', function (req, res)  {
	console.dir(req.ip);
	fs.readFile("./static/101-copy.html", function (err, data) {
		// console.log("scuccess:" +  data);
		res.set('Content-Type', 'text/html')
		res.status(200).send(data);
	})
});

var text;

app.post('/dopost', upload.array(), function (req, res, next) {
  console.log(req.body.text)
  // res.json(req.body)
  text = req.body.text;
   res.redirect(301, '/copy');
  

});

app.get('/text', function(req, res) {
	console.log("send text:" + text);
	res.status(200).send(text);
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))