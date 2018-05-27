var katzDeliLine = [];

function takeANumber(line, newCustomer) {
  line.push(newCustomer);
  var position = line.length;
  return `Welcome, ${newCustomer}. You are number ${position} in line.`;
}

function nowServing(line) {
  if (line.length === 0) {
    return "There is nobody waiting to be served!";
  } else {
  var name = line.shift();
  return `Currently serving ${name}.`;
  }
}

function currentLine(line) {
  var announcement = "The line is currently";
  if (line.length === 0) {
    announcement += " empty.";
  }
  else {
    announcement += ": "
    for (let i=0; i<line.length; i++) {
      announcement += `${i+1}. ${line[i]}`
      if (i<line.length - 1) {
        announcement += ", "
      }
    }
  }
  return announcement
}