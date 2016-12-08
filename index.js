var katzDeliLine = [];

function takeANumber(katzDeliLine, name) {
  katzDeliLine.push(name);
  return `Welcome, ${name}. You are number ${katzDeliLine.length} in line.`
};

function nowServing(katzDeliLine) {
  if (katzDeliLine.length > 0) {
    let currentPerson = katzDeliLine[0];
    katzDeliLine.shift();
    return `Currently serving ${currentPerson}.`;
  }
  else {
    return "There is nobody waiting to be served!";
  }
};

function currentLine(katzDeliLine) {
  let line = "";
  if (katzDeliLine.length > 0) {
    for (let i = 0; i < katzDeliLine.length; i++) {
      if (i === katzDeliLine.length - 1) {
        line += [i + 1] + ". " + katzDeliLine[i];
      }
      else {
        line += [i + 1] + ". " + katzDeliLine[i] + ", ";
      }
    }
    return "The line is currently: " + line;
  }
  else {
    return "The line is currently empty.";
  }
};