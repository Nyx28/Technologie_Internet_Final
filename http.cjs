const express = require("express");
const app = express();

app.listen(8080, () => {
    console.log("Application started and Listening on port 3000");
});
app.use(express.static(__dirname));
app.get("/index.html", (req, res) => {
    res.sendFile(__dirname + "/courriel.html");
});
//https://www.section.io/engineering-education/rendering-html-pages-as-a-http-server-response-using-node-js/