const brokenNecklace = (input) => {
  if (input.indexOf("r") == -1 || input.indexOf("b") == -1) {
    return "not a valid necklace";
  }
  const beads = input.toLowerCase() + input.toLowerCase();
  let max = 0;
  for (let ii = 0; ii < beads.length; ii++) {
    let count1 = 0;
    let whitespace = "w";
    let firstOfItsKind = true;

    for (let jj = ii; jj < beads.length; jj++) {
      if (whitespace === beads.charAt(jj) || beads.charAt(jj) === "w") {
        count1++;
        if (beads.charAt(jj) !== "w") {
          firstOfItsKind = false;
          whitespace = beads.charAt(jj);
        }
      } else if (beads.charAt(jj) !== "w") {
        if (firstOfItsKind) {
          firstOfItsKind = false;
          count1++;
          whitespace = beads.charAt(jj);
        } else {
          break;
        }
      }
    }

    whitespace = "w";
    firstOfItsKind = true;
    let count2 = 0;
    for (let jj = ii - 1; jj >= 0; jj--) {
      if (whitespace === beads.charAt(jj) || beads.charAt(jj) === "w") {
        count2++;
        if (beads.charAt(jj) !== "w") {
          firstOfItsKind = false;
          whitespace = beads.charAt(jj);
        }
      } else if (beads.charAt(jj) !== "w") {
        if (firstOfItsKind) {
          firstOfItsKind = false;
          count2++;
          whitespace = beads.charAt(jj);
        } else {
          break;
        }
      }
    }
    if (count1 + count2 > max) {
      max = count1 + count2;
    }
    if (count1 + count2 >= input.length) {
      max = input.length;
      break;
    }
  }
  return max;
};
export { brokenNecklace };
