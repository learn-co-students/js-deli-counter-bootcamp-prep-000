const katzDeliLine = [];

function takeANumber(katzDeliLine, newPerson) {
  katzDeliLine.push(newPerson);
  return `Welcome, ${ newPerson }. You are number ${ katzDeliLine.length } in line.`
}

function nowServing(katzDeliLine) {

  if (katzDeliLine.length > 0) {
    var firstInLine = katzDeliLine[0]
    katzDeliLine.shift();
    return `Currently serving ${ firstInLine }.`

  } else {
    return "There is nobody waiting to be served!";
  }
}

function currentLine(katzDeliLine) {

  let i = 0;
  let n = 1;
  var newString = ""

  if (katzDeliLine.length === 0) {
    return "The line is currently empty."
  } else {

    while (i < katzDeliLine.length) {
      var newString = newString + `${n}. ${katzDeliLine[i]}`

      if ( i + 1 < katzDeliLine.length ) {
          var newString = newString +", ";
        }

      i++;
      n++;
    }

    return "The line is currently: " + newString
  }
}
