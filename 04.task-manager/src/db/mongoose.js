const mongoose = require("mongoose");

const defaultPort = "27017";
mongoose.connect(`mongodb://127.0.0.1:${defaultPort}/task-manager-api`, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: false,
});
