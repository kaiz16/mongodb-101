const { MongoClient } = require("mongodb");
const uri = "CONNECTION_STRING_HERE"; // Connection string
const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Create schemas or collections
const createCollections = async (db) => {
  await db.createCollection("users", {
    name: String,
    age: Number,
    email: String,
    password: String,
  });

  await db.createCollection("todos", {
    title: String,
    description: Number,
    isCompleted: Boolean,
    userId: String,
  });
};

client.connect(async (err) => {
  console.log(err);
  const db = client.db("test");
  await createCollections(db);
  // perform actions on the collection object
  client.close();
});
