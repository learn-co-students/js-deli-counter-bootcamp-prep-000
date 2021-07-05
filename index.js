function takeANumber(katzDeliLine, name) {
    katzDeliLine.push(name);
    return `Welcome, ${name}. You are number ${katzDeliLine.length} in line.`;
}

//Alternative
//if (!katzdeliLine.length) {
//  return "There is nobody waiting to be served!"
//}
//  my return statement below
function nowServing(katzDeliLine) {
  if (katzDeliLine.length > 0) {
  return `Currently serving ${katzDeliLine.shift()}.`;
  } else {
    return "There is nobody waiting to be served!";
  }
}

//Alternative
//function currentLine(line) {
//   if (!line.length) {
//     return "The line is currently empty."
//   }

//   const numbersAndNames = []

//   for (let i = 0, l = line.length; i < l; i++) {
//     numbersAndNames.push(`${i + 1}. ${line[i]}`)
//   }

//   return `The line is currently: ${numbersAndNames.join(', ')}`
// };
function currentLine(katzDeliLine) {
  if (katzDeliLine.length > 0) {
    const katzDeli = [];
    for (let i = 0; i < katzDeliLine.length; i++) {
      katzDeli.push(` ${i + 1}. ${katzDeliLine[i]}`);
    }
    return "The line is currently:" + katzDeli.toString();
  } else {
    return "The line is currently empty.";
  }
}