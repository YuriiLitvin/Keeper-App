const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/api", (req, res) => {
    res.json({ message: "Hello from server" });
});


const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
    console.log("Server is running on " + PORT);
});