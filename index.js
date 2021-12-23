const { MongoClient } = require("mongodb");
const express = require("express");

const app = express();
const uri = "CONNECTION_STRING_HERE"; // Connection string
const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
let DB;

app.use(express.json());

app.post("/users/create", async (req, res) => {
  const { name, email, password, age } = req.body;
  try {
    await DB.collection("users").insertOne({
      name,
      email,
      password,
      age,
    });

    return res.status(200).json("Ok");
  } catch (error) {
    return res.status(400).json(error);
  }
});

client.connect(async (err) => {
  if (!err) {
    console.log("Connected to the db.");
  }
  DB = client.db("test");
  app.listen(5000, () => {
    console.log("App is now listening at Port 5000.");
  });
});
