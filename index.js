function takeANumber(katzDeliLine, name) {
  katzDeliLine.push(name);
  return `Welcome, ${name}. You are number ${katzDeliLine.indexOf(name) + 1} in line.`;
}

function nowServing(katzDeliLine) {
  if(katzDeliLine.length === 0) {
    return "There is nobody waiting to be served!";
  } else {
    let next = katzDeliLine[0];
    katzDeliLine.shift();
    return `Currently serving ${next}.`;
  }
}

function currentLine(line) {
  if(line.length === 0) {
    return "The line is currently empty.";
  } else if(line.length === 1) {
    return `The line is currently: 1. ${line[0]}`;
  } else {
    let str = `The line is currently: 1. ${line[0]}`;
    for(let i = 1; i < line.length; i++) {
      str += `, ${i + 1}. ${line[i]}`;
    }
    return str;
  }
}