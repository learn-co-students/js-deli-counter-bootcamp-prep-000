function takeANumber(katzDeliLine,name) {
  katzDeliLine.push(name);
  console.log(`Welcome, ${name}. You are number ${katzDeliLine.length}`);
  // return `Welcome, ${name}. You are number ${position} in line.`;
  return `Welcome, ${name}. You are number ${katzDeliLine.length} in line.`;
}

function nowServing(katzDeliLine) {
  if (katzDeliLine.length !== 0) {
    return `Currently serving ${katzDeliLine.shift()}.`;
  } else {
    return "There is nobody waiting to be served!";
  }
}

function currentLine(line) {
  var current = [];

  if (line.length === 0) {
    return "The line is currently empty.";
  } else {
    for (let i = 0; i < line.length; i++) {
        current.push(` ${i + 1}. ${line[i]}`);
      }
    }

  return `The line is currently:${current.toString()}`;
}
