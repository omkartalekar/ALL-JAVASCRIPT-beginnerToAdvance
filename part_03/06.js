const myPromise = new Promise((resolve, reject) => {
  resolve("foo");
});

myPromise
  .then((value) => {
    console.log(value);
    // foo
    value += " " + "bar";
    return value;
  })
  .then((value) => {
    console.log(value);
    // foo bar

    value += " " + "baaz";
    return value;
  })
  .then((value) => {
    console.log(value);
    // foo bar baaz
  })
  .catch(() => {
    console.log("error");
  });
