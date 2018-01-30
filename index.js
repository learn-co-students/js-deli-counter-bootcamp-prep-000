
function takeANumber(katzDeliLine, name) {
  katzDeliLine.push(name);
  return `Welcome, ${name}. You are number ${katzDeliLine.length} in line.`;
}

function nowServing(katzDeliLine) {
  var current = katzDeliLine.shift();
  if (current) {
    return `Currently serving ${current}.`;
  }
  else {
    return "There is nobody waiting to be served!";
  }
}

function currentLine(line) {
  var output = "The line is currently empty.";
  var separator = "";

  if (line.length>0) {
    output = "The line is currently: ";
    for (let i=0; i<line.length; i++) {
      if (i<line.length - 1) {
        separator = ", ";
      }
      else {
        separator ="";
      }
      output = output + `${i+1}. ${line[i]}${separator}`
    }
  }
  return output;
}
