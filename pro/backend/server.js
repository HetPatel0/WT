const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect("mongodb://localhost:27017/introDB")
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("Failed to connect to MongoDB", err));

const introSchema = new mongoose.Schema({
  name: String,
  email: String,
  message: String,
});

const Intro = mongoose.model("Intro", introSchema);

app.post("/contact", (req, res) => {
  const newIntro = new Intro(req.body);
  newIntro.save((err) => {
    if (err) {
      res.status(500).send("Error saving message.");
    } else {
      res.status(200).send("Message saved successfully.");
    }
  });
});

app.listen(5000, () => {
  console.log("Server is running on port 5000");
});
