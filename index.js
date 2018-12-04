var katzDeliLine = [];

function takeANumber(katzDeliLine, name) {
  katzDeliLine.push(name);
  return `Welcome, ${name}. You are number ${katzDeliLine.length} in line.`
}

function nowServing(katzDeliLine) {
  if(katzDeliLine.length === 0) {
    return 'There is nobody waiting to be served!';
  }
  var newLine = katzDeliLine.shift();
  return 'Currently serving ' + newLine + '.';
}

function currentLine(katzDeliLine) {
  if(katzDeliLine.length === 0) {
    return 'The line is currently empty.';
  }
  var newArr = [];
  for(var i = 0; i < katzDeliLine.length; i++) {
    var name = katzDeliLine[i];
    var place = i + 1;
    newArr.push(place + '. ' + name);
  }
  return 'The line is currently: ' + newArr.join(', ');
}