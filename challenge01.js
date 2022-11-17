const fetch = (...args) =>
  import("node-fetch").then(({ default: fetch }) => fetch(...args));

const fetchDatabase = async () => {
  await fetch("https://codember.dev/users.txt")
    .then((res) => res.text()) //.toString().split("\r\n"))
    .then((res) => res.toString().split(/\n\n/))
    .then((res) => res.filter((line) => line !== ""))
    .then((res) => res.filter((user) => user.match(/:/g).length >= 6))
    .then((res) => console.log(res))
    .catch((err) => console.log(err));
};

fetchDatabase();
