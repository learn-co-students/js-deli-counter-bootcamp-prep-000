var katzDeliLine= [];

function takeANumber(katzDeliLine, name) {
  katzDeliLine.push(name);
  return `Welcome, ${name}. You are number ${katzDeliLine.length} in line.`;
}

function nowServing(katzDeliLine) {
  if (katzDeliLine.length > 0) {
    var serving = katzDeliLine[0];
    katzDeliLine = katzDeliLine.shift();
    return `Currently serving ${serving}.`;
  }
  else {
    return "There is nobody waiting to be served!";
  }
}

function currentLine(line) {
  if (line.length > 0) {
    var str = "The line is currently: ";
    var i = 0;
    while (i < line.length) {
      if ((i + 1) < line.length) {
        str += `${i + 1}. ${line[i]}, `;
      }
      else {
        str += `${i + 1}. ${line[i]}`
      }
      i++;
    }

    return str;
  }
  else {
    return "The line is currently empty.";
  }
}
