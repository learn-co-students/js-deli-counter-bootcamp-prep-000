function takeANumber(katzDeliLine, name) {
  katzDeliLine === [] ? katzDeliLine[0] = name : katzDeliLine.push(name);

  var pos = 0;
  while (katzDeliLine[pos] != name) {
    pos++;
  }

  return `Welcome, ${name}. You are number ${pos+1} in line.`;
}

function nowServing(katzDeliLine) {
  if (katzDeliLine.length === 0) {
   return "There is nobody waiting to be served!";
 } else {
   return `Currently serving ${katzDeliLine.shift()}.`;
 }
}

function currentLine(katzDeliLine) {
  if (katzDeliLine.length === 0) {
    return "The line is currently empty."
  } else {
    var line = "The line is currently: "
    for (var i=0; i<katzDeliLine.length; i++){
      line += `${i+1}. ${katzDeliLine[i]}${i === katzDeliLine.length - 1 ? '' : ', '}`;
    }
  }
  return line;
}
