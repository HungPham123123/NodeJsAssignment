const express = require("express");
const bodyParser = require('body-parser');
const session = require("express-session");
const app = express();
const port = 2305;

app.listen(port, function() {
    console.log("Server is running....");
});

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.urlencoded({ extended: true }));


// Set static files
app.use(express.static("public"));

// Set view engine
app.set("view engine", 'ejs');


// Connect to database
require("./model/database");

const webrouter = require("./routes/product.route");
app.use("/", webrouter);