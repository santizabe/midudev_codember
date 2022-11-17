const fetch = (...args) =>
  import("node-fetch").then(({ default: fetch }) => fetch(...args));

// a = 97; z = 122

const parseString = async (str) => {
  let charArr = [];
  let message = [];
  for (let i = 0; i <= str.length; ) {
    if (str.charAt(i) === "1") {
      charArr.push(
        str.charAt(i).concat(str.charAt(i + 1).concat(str.charAt(i + 2)))
      );
      i = i + 3;
    } else if (str.charAt(i) === "9") {
      charArr.push(str.charAt(i) + str.charAt(i + 1));
      i = i + 2;
    } else {
      charArr.push("32");
      i++;
    }
  }
  charArr.forEach((char) => {
    message.push(String.fromCharCode(char));
  });

  console.log(message.join(""));
};

const decrypt = async () => {
  try {
    let text = await fetch("https://codember.dev/encrypted.txt");
    text = await (await text.text()).toString();
    console.log(text);
    parseString(text);
  } catch {
    console.error(err);
  }
};

decrypt();
