// import express //
const express = require("express");
const app = express();

// setting the variable to the index js file //
const index = require("./routes/index.js");

// allows access to the public folder //
app.use(express.static("public"));

// setting your default template engine to pug//
app.set("view engine", "pug");

// making the index link to the javascript file //
app.use("/", index);


// port to use //
app.listen(8000, () => {
    console.log("port 8000 in use")
});


