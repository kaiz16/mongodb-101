const { MongoClient } = require("mongodb");
const uri = "CONNECTION_STRING_HERE"; // Connection string
const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Delete collections
const deleteCollections = async (db) => {
  await db.collection("users").drop();
  await db.collection("todos").drop();
};

client.connect(async (err) => {
  console.log(err);
  const db = client.db("test");
  await deleteCollections(db);
  // perform actions on the collection object
  client.close();
});
