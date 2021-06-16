require("../src/db/mongoose");
const Task = require("../src/models/task");

// Task.findByIdAndRemove("60c95de93b613309746e0e5c")
//   .then((removedTask) => {
//     return Task.countDocuments({ completed: false });
//   })
//   .then((result) => {
//     console.log(result);
//   })
//   .catch((e) => {
//     console.log(e);
//   });

const deleteTaskAndCount = async (id) => {
  await Task.findByIdAndDelete(id);
  const count = Task.countDocuments({ completed: false });
  return count;
};

deleteTaskAndCount("60c95e1c23e06e09886b2a99")
  .then((count) => {
    console.log(count);
  })
  .catch((e) => {
    console.log(e);
  });
