const express = require("express");

const app = express();

app.get("/", function (req, res) {
    res.send({"slackUsername":"adenijialiuolamilekan",
               "backend":true,
                    "age":26,
                "Bio":"I am ALiyu  Adeniji, I am a fullstack developer and I love creating new things"})
})




app.listen(3000, function(){
    console.log("server is running")
})