const express = require("express");
const bodyParser = require("body-parser");
const db = require("./db");

const app = express();
app.use(bodyParser.json());

app.get("/api", (req, res) => {
    db.getAll()
        .then(notes => {
            res.setHeader("Content-Type", "application/json");
            res.send(notes);
        }
    );
});

app.post("/api", (req, res) => {
    const note = req.body;
    db.addItem(note)
        .then(() => {
            res.sendStatus(200);
        });
});

app.delete("/api", (req, res) => {
    const id = req.body.itemId;
    db.deleteItem(id)
        .then(() => {
            res.sendStatus(200);
        }
    );
});

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
    console.log("Server is running on " + PORT);
});