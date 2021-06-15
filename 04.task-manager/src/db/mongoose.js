const mongoose = require("mongoose");
const validator = require("validator");

const defaultPort = "27017";
mongoose.connect(`mongodb://127.0.0.1:${defaultPort}/task-manager-api`, {
  useNewUrlParser: true,
  userCreateIndex: true,
});

const User = mongoose.model("User", {
  name: {
    type: String,
    required: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    trim: true,
    lowercase: true,
    validate(value) {
      if (!validator.isEmail(value)) throw new Error("Email is invalid");
    },
  },
  age: {
    type: Number,
    default: 0,
    validate(value) {
      if (value < 0) throw new Error("Age must be a positive number");
    },
  },
  password: {
    type: String,
    required: true,
    minlength: 7,
    trim: true,
    validate(value) {
      if (value.toLowerCase().includes("password"))
        throw new Error(`Password must not conatin a word "password" in it`);
    },
  },
});

const me = new User({
  name: "     Mike    ",
  email: "   MiKE@gmail.com ",
  password: "mike1234",
});

me.save()
  .then((res) => {
    console.log(res);
  })
  .catch((error) => {
    console.log("Error: ", error);
  });

// const Task = mongoose.model("Task", {
//   description: {
//     type: String,
//   },
//   completed: {
//     type: Boolean,
//   },
// });

// const t1 = new Task({
//   description: "Study NodeJS",
//   completed: true,
// });

// t1.save().then(console.log).catch(console.log);
