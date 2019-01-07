var katzDeliLine;

function takeANumber(katzDeliLine, name) {
  katzDeliLine.push(name);
    return `Welcome, ` + name + `. You are number ` + katzDeliLine.length + ` in line.`;
}
// Welcome, Frank. You are number 1 in line.

function nowServing(katzDeliLine) {
  if (katzDeliLine.length === 0) {
    return `There is nobody waiting to be served!`;
  } else {
      return `Currently serving ` + katzDeliLine.splice(0, 1) +  `.`;
  }
}

/* Currently serving Frank. "//returns katzDeliLine mutated to have no elements, splice is destructive. (katzDeliLine;
[])" */

function currentLine(katzDeliLine) {
const line = [];
if (katzDeliLine.length === 0) {
    return `The line is currently empty.`;
  } else {
      for (let i = 0; i < katzDeliLine.length; i++) {
        line.push(`${i + 1}. ${katzDeliLine[i]}`);
        //i knew i needed a template literal as en element to push into the array "line"
        //tried 2 return lines (wrong scope)
  //I knew I needed an array created here, and I knew I needed it to be concatenated into one string, so that it could be returned in the string literal, just outside of this block of code. So I used the ".join" method to add the proper spacing between elements of the array "line"
      }
//       knowing that i needed to "put a string in each element of an array",
    return `The line is currently: ${line.join(", ")}` ;
  }
}
/*
//line.push-ing a string into an empty array, then concatenating the array into a string using .join and spacing with ", " to equal the keystrokes needed to complete the lab



"".join" turns the array into a string. This for loop should satisfy the array "line" for infinity
*/
/*
function currentLine(katzDeliLine) {
  if (katzDeliLine.length === 0) {
    return `The line is currently empty.`;
  } else {
      return `The line is currently: 1. ${katzDeliLine[0]}, 2. ${katzDeliLine[1]}, 3. ${katzDeliLine[2]}`;
  }
}*/