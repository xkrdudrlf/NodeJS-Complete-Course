// CRUD create read update delete

const { MongoClient, ObjectID } = require("mongodb");

const defaultPort = "27017";
const connectionURL = `mongodb://127.0.0.1:${defaultPort}`;
const databaseName = "task-manager";

MongoClient.connect(
  connectionURL,
  { useNewUrlParser: true },
  (error, client) => {
    if (error) return console.log("Unable to connect to database");

    const db = client.db(databaseName);

    // db.collection("users")
    //   .deleteMany({
    //     age: 28,
    //   })
    //   .then(console.log)
    //   .catch(console.log);

    db.collection("tasks")
      .deleteOne({
        description: "Do the dishes",
      })
      .then((res) => console.log("success"))
      .catch((err) => console.log("failed"));
  }
);
