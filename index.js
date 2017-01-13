var katzDeli = [];

function takeANumber(katzDeliLine, name) {
  katzDeliLine.push(name);
  var position = katzDeliLine.indexOf(name) + 1;
  return ('Welcome, ' + name + '. You are number ' + (position) + ' in line.');
}

function nowServing(katzDeli) {
  if (katzDeli.length === 0) {
    return ('There is nobody waiting to be served!')
  } else {
    var name = katzDeli.shift();
    return ('Currently serving ' + name + '.');
  }
}

function currentLine(katzDeli) {
  if (katzDeli.length === 0) {
    return ('The line is currently empty.')
  } else {
    return ('The line is currently: 1. ' + katzDeli[0] + ', 2. ' + katzDeli[1] + ', 3. ' + katzDeli[2]);
  }
}
