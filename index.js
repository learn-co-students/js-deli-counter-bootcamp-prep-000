// var katzDeli = [];

function takeANumber(katzDeliLine, newPersonsName) {
  katzDeliLine.push(newPersonsName);

  return 'Welcome, ' + newPersonsName + '. You are number ' + katzDeliLine.length + ' in line.';
}

function nowServing(lineOfCustomers) {
  if(lineOfCustomers.length === 0) {
    return 'There is nobody waiting to be served!';
  } else {
    return 'Currently serving ' + lineOfCustomers.shift() + '.';
  }
}

function currentLine(line) {
  var result = [];

  if(line.length === 0) {
    return 'The line is currently empty.';
  } else {
    for(var i = 0; i < line.length; i++) {
      result.push((i + 1) + '.' , line[i] + ',');
    }
    return 'The line is currently: ' + result.join(' ').replace(/,\s*$/, "");
  }
}
