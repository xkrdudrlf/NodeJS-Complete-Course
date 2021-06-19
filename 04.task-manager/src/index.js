const express = require("express");
require("./db/mongoose");
const userRouter = require("./routers/user");
const taskRouter = require("./routers/task");

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(userRouter);
app.use(taskRouter);

app.listen(port, () => {
  console.log("Server is up on port " + port);
});

const Task = require("./models/task");
const User = require("./models/user");

const main = async () => {
  // const task = await Task.findById("60cd7826f785530aca00d139");
  // await task.populate("owner").execPopulate();
  // console.log(task.owner);

  const user = await User.findById("60cd771bdb13a80a8b5082d0");
  await user.populate("tasks").execPopulate();
  console.log(user.tasks);
};

// main();
