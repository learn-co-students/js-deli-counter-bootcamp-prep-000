var katzDeli = [];
function takeANumber(katzDeliLine, name) {
  katzDeliLine.push(name);
  // return "Welcome, " + name + ". You are number " + katzDeliLine.length + " in line.";
  return `Welcome, ${name}. You are number ` + katzDeliLine.length + " in line.";
}

function nowServing(deliLine) {
  if (deliLine.length === 0) {
    return "There is nobody waiting to be served!";
  } else {
    let name = deliLine[0];
    deliLine.shift();
    return `Currently serving ${name}.`
  }
}

function currentLine(line) {
  if (line.length === 0) {
    return "The line is currently empty."
  } else {
    let string = "The line is currently: ";
    for (let i=0; i < line.length; i++) {
      string += (i+1) + ". " + line[i];
      if (i < line.length - 1) {
        string += ", ";
      }
    }
    return string;
  }
}
