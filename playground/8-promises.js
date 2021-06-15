const doWorkPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject("Things went wrong");
  }, 2000);
});

doWorkPromise
  .then((res) => console.log(res))
  .catch((error) => {
    console.log("Error!", error);
  });
