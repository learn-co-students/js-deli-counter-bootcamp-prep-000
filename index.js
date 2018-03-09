function takeANumber(katzDeliLine, name) {
  katzDeliLine.push(name);
 return `Welcome, ${name}. You are number ${katzDeliLine.length} in line.`;
}

function nowServing(katzDeliLine) {
  if (katzDeliLine.length === 0) {
    return "There is nobody waiting to be served!";
  } else {
    let name = katzDeliLine[0];
    katzDeliLine.shift();
    return `Currently serving ${name}.`;
  }
}

function currentLine(line) {
  if (line.length === 0) {
    return "The line is currently empty.";
  } else {
    let str = "The line is currently: ";
    for(let i = 0; i < line.length ; i++) {
      str += `${i + 1}. ${line[i]}, `;
    }
    return str.slice(0, -2);
  }
}