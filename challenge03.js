const fetch = (...args) =>
  import("node-fetch").then(({ default: fetch }) => fetch(...args));

const fetchColors = async () => {
  const colors = await fetch("https://codember.dev/colors.txt").then((res) =>
    res.json()
  );
  return colors;
};

const filterZebra = async () => {
  const colors = await fetchColors();
  const zebras = [];

  let j = 1;
  for (let i = 0; i < colors.length; ) {
    curr = colors[i];
    next = colors[i + 1];
    nextCurr = colors[i + 2];
    prevNext = colors[i - 1];
    if (curr === next) {
      i++;
      continue;
    } else {
      if (nextCurr && curr === nextCurr) {
        if (j === 1) {
          j = j + 2;
          i = i + 2;
          continue;
        } else {
          if (prevNext === next) {
            j += 2;
            i = i + 2;
            continue;
          } else {
            j > 14 && zebras.push({ j, curr });
            j = 1;
            continue;
          }
        }
      } else {
        if (prevNext && next) {
          if (prevNext === next) {
            j++;
            j > 14 && zebras.push({ j, next });
            j = 1;
            i++;
            continue;
          } else {
            j > 14 && zebras.push({ j, curr });
          }
        }
      }
      i++;
    }
  }
  console.log(zebras);
};

filterZebra();
