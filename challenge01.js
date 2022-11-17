const fetch = (...args) =>
  import("node-fetch").then(({ default: fetch }) => fetch(...args));

const fetchDatabase = async () => {
  await fetch("https://codember.dev/users.txt")
    .then((res) => res.text()) //.toString().split("\r\n"))
    .then((res) => res.toString().split(/\n?\r?\n/g))
    .then((res) => res.filter((line) => line !== ""))
    .then((res) => console.log(res))
    .catch((err) => console.log(err));
};

fetchDatabase();

// split
// place each individual in an object
