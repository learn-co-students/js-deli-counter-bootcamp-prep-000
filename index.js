var katzDeliLine = [];

function takeANumber(katzDeliLine, name) {
  katzDeliLine.push(name);
  return katzDeliLine.indexOf(name) + 1;
}

function nowServing() {
  if (katzDeliLine.length === 0) {
    console.log('There is nobody waiting to be served!')
  } else {
    katzDeliLine[0];
    return katzDeliLine.shift();
  }
}

function currentLine(katzDeliLine) {
  if (katzDeliLine.length === 0) {
    console.log('The line is currently empty.');
  } else {
      return 'The current line is:' katzDeliLine;
    }
  }
}


//function currentLine(katzDeliLine) {
//  if (katzDeliLine.length === 0) {
//    console.log('The line is currently empty.');
//  } else {
//    var newArray = [];
//    for (var i = 0; i < katzDeliLine.length; i++) {
//      newArray.push(i + 1 + katzDeliLine[i])
//    } return newArray;
//  }
//}
