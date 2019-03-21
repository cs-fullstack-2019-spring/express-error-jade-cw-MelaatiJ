const express = require("express");
const router = express.Router();


// router that requires two placeholders and renders tpo my exercise 1 webpage //
router.get("/exercise1/:ph1/:ph2", (request, response) => {
    response.render("exercise1", {placeholder1: request.params.ph1, placeholder2:request.params.ph2})
});


router.get("/exercise2/:number", (request, response) => {
    var template="";
    if(request.params.number <= 0){
        template="lessthan"
    }
    else{
        template = "greaterthan"
    }
    response.render("exercise2", {placeholder : template})
});


router.get("/exercise3", (request, response) => {
    response.render("exercise3")
});



module.exports=router;