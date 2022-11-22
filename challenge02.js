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
    } else if (str.charAt(i) !== "1" && str.charAt(i) !== " ") {
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
  // text =
  //   "83101 113117105101110 101114101115 84101 9911111011112299111 84117 110111 109101 9911111011199101115 97 109105 84101 101115116111121 1119811510111411897110100111 84101 101115116111121 115105103117105101110100111 81117105101114101115 10611710397114 7411710110397 99111110109105103111 8697108101 8697109111115 97 10611710397114 691061019911711697 101115116101 9911110997110100111 101110 10897 11610111410910511097108 11511798109105116 116561181061045651505752561029911097108";
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
