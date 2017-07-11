var katzDeliLine = [];

function takeANumber(katzDeliLine, name) {

  katzDeliLine.push(name);
  var num = katzDeliLine.length;

  return 'Welcome, ' + name + '. You are number ' + num + ' in line.';
}

function nowServing(katzDeliLine) {

  if (katzDeliLine.length === 0) {
    return 'There is nobody waiting to be served!';

  } else {
    var name = katzDeliLine[0];
    katzDeliLine.shift();
    return 'Currently serving ' + name + '.';
  }
}

function currentLine(katzDeliLine) {

  if (katzDeliLine.length === 0) {
    return "The line is currently empty.";

  } else {
    var array = [];

    for (var i = 0; i < katzDeliLine.length; i++) {
      var place = i + 1;
      array.push(place + '. ' + katzDeliLine[i]);
    }
    return "The line is currently: " + array.join(', ');
  }
}
