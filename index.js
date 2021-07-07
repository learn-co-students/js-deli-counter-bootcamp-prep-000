var katzDeli = []

function takeANumber(katzDeliLine, name) {
  //katzDeli == katzDeliLine;
  katzDeliLine.push(name);

  return ('Welcome, '+ name +'. You are number ' + katzDeliLine.length + ' in line.')

};
function nowServing(line) {
  if (line.length == 0) {
    return "There is nobody waiting to be served!"
  } else return ('Currently serving ' + line.shift() +'.')
}

function currentLine(line) {
  if (line.length == 0) {
    return "The line is currently empty.";
  }
  else {
    var i = 'The line is currently:';
    for(var x = 0; x<line.length; x++)
    if (x<line.length - 1) {
      i = i + " " + (x+1) +". "+ line[x] + ",";
    } else {i = i + " " + (x+1) +". "+ line[x];}
    return i;
  }
}
