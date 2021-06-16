const add = (a, b) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(a + b);
    }, 2000);
  });
};

const doWork = async () => {
  let sum = await add(1, 1);
  console.log(sum);
  sum = await add(sum, 1);
  console.log(sum);
  return "Andrew";
};

doWork()
  .then((result) => {
    console.log("result", result);
  })
  .catch((e) => {
    console.log(e.message);
  });
