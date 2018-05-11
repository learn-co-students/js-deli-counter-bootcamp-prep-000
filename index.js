var katzDeliLine = [];

function takeANumber(katzDeliLine, name) {
  if (katzDeliLine.length === 0) {
    katzDeliLine.push(name);
    return `Welcome, ${name}. You are number 1 in line.`
  }
  else {
    katzDeliLine.push(name);
    return `Welcome, ${name}. You are number ${katzDeliLine.length} in line.`
  }
}

function nowServing(katzDeliLine) {
  let array = [];
  if (katzDeliLine.length === 0) {
    return "There is nobody waiting to be served!"
  }
  else {
    array.push(katzDeliLine[0]);
    katzDeliLine.shift();
    return `Currently serving ${array[0]}.`;
  }
}

function currentLine(katzDeliLine) {
  let string = "The line is currently: ";
  if (katzDeliLine.length === 0) {
    return "The line is currently empty."
  }
  else {
    for (let i = 0; i < katzDeliLine.length - 1; i++) {
      string = string.concat(`${i+1}. ${katzDeliLine[i]}, `);
    }
    string = string.concat(`${katzDeliLine.length}. ${katzDeliLine[katzDeliLine.length - 1]}`);
  }
  return string;
}