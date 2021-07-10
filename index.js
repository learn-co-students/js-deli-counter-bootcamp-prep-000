var katzDeliLine = [];
function takeANumber(katzDeliLine, name) {
  katzDeliLine.push(name);

  return 'Welcome, ' + name + '. You are number ' + katzDeliLine.length + ' in line.';
}

function nowServing(katzDeliLine) {
  if(katzDeliLine.length > 0) {
  return "Currently serving " + katzDeliLine.shift() + ".";
}
  return "There is nobody waiting to be served!";
}

function currentLine(katzDeliLine) {
  if(katzDeliLine.length === 0) {
    return 'The line is currently empty.';
  }
  var str = 'The line is currently:';
  for(var i = 1; i <= katzDeliLine.length; i++) {
    if(i === katzDeliLine.length) {
      str +=' ' + i + '. ' + katzDeliLine[i-1];
    } else {
      str +=' ' + i + '. ' + katzDeliLine[i-1] + ',';
    }
  }

  return str;
}
