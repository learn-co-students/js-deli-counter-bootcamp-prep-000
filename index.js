var katzDeliLine = [];

function takeANumber(katzDeliLine, name) {

  katzDeliLine.push(name);

  for (var i = 0; i < katzDeliLine.length; i++) {
    var num = i + 1;
  }
  return 'Welcome, ' + name + '. You are number ' + num + ' in line.'
}

function nowServing(katzDeliLine) {
  if (katzDeliLine.length >= 1) {
    var person = katzDeliLine[0];
    katzDeliLine.shift();
    return 'Currently serving ' + person + '.'
    } else {
    return 'There is nobody waiting to be served!'
  }
}

function currentLine(katzDeliLine) {
  var newLine = 'The line is currently: ';

  if (katzDeliLine.length === 0) {
    return 'The line is currently empty.'
  } else {
      for (var i = 0; i < katzDeliLine.length - 1; i++) {
    var person = katzDeliLine[i];
    newLine += (i + 1) + '. ' + person + ',' + ' ';
      }
  }

  return newLine + [katzDeliLine.length] + '. ' + katzDeliLine[katzDeliLine.length - 1];
}
