var katzDeliLine = [];

function takeANumber(katzDeliLine, nextPerson) {
  katzDeliLine.push(nextPerson);
  var message = 'Welcome, ' + katzDeliLine[katzDeliLine.length -1] + '. You are number ' + katzDeliLine.length + ' in line.';
  return message;
}


function nowServing(katzDeliLine) {
  if (katzDeliLine.length > 0) {
    let nowServing = katzDeliLine[0];
    katzDeliLine.shift();
    return ('Currently serving ' + nowServing + '.');
  } else {
    return 'There is nobody waiting to be served!';
  }
}


function currentLine(katzDeliLine) {
  if (katzDeliLine.length > 0) {
    var list = 'The line is currently: ';
    for (let i = 0; i < katzDeliLine.length; i++) {
      list = list + (i + 1) + '. ' + katzDeliLine[i];
      if (i + 1 < katzDeliLine.length) {
        list = list + ', ';
      }
    }
  } else {
    return 'The line is currently empty.';
  }
  return list;
}

