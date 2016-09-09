function takeANumber(katzDeliLine, newNamePerson) {

  var position = 0;

  katzDeliLine.push(newNamePerson);

  for (var i = 0; i < katzDeliLine.length; i++) {
    if (katzDeliLine[i] === newNamePerson) {
      position = i;
    }
  }

  return `Welcome, ${newNamePerson}. You are number ${position+1} in line.`
}

function nowServing(katzDeliLine) {
  if (katzDeliLine.length === 0) {
    return "There is nobody waiting to be served!";
  } else {
    var name = katzDeliLine.splice(0,1);
    return `Currently serving ${name}.`;
  }
}

function currentLine(katzDeliLine) {
  if (katzDeliLine.length === 0) {
    return "The line is currently empty.";
  } else {
    var positionName = "";
    for (var i = 0; i < katzDeliLine.length; i++) {
      positionName += `${i+1}. ${katzDeliLine[i]}`;

      if (i < katzDeliLine.length-1) {
        positionName += ", "
      }

    }

    return `The line is currently: ${positionName}`;
  }
}
