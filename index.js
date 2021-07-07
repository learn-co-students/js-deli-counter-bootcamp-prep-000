var katzDeliLine = [];

function takeANumber (line, newName) {
  line.push(newName)
  return `Welcome, ${newName}. You are number ${line.length} in line.`;
}

function nowServing (line) {
  if (line.length === 0) {
    return "There is nobody waiting to be served!";
  }
    return "Currently serving " + line.shift() + ".";
}

function currentLine(line) {
  if (line.length === 0) {
    return "The line is currently empty.";
  } else {
    // "The line is currently: 1. Bill, 2. Jane, 3. Ann"
    var initial = [];
    // for ([initialization]; [condition]; [iteration]) {
    //   [loopBody]
    // }
    for (let i=0; i < line.length; i++) {
     initial.push(`${i+1}. ${line[i]}`)
    }
    return `The line is currently: ${initial.join(', ')}`;
  }

}
