function takeANumber(katzDeliLine, newName) {
    katzDeliLine.push(newName);
  return `Welcome, ${newName}. You are number ${katzDeliLine.length} in line.`;

}

function nowServing (katzDeliLine) {
  if (katzDeliLine.length > 0) {
    //there is a problem i have when it comes to determining what the first persons name is and taking it out. i know i can do it in one line too
    return `Currently serving ${katzDeliLine.shift()}.`;

  } else {
    return "There is nobody waiting to be served!";
  }
}

function currentLine (katzDeliLine) {
  var index = `The line is currently: 1. ${katzDeliLine.shift()}`;
  var newLineArray = [];
  if (katzDeliLine.length > 0) {
    while (katzDeliLine.length >0) {
      newLineArray.push(` ${newLineArray.length + 2}. ${katzDeliLine.shift()}`);
    }
    newLineArray.unshift(index);
    return newLineArray.toString();
    //make a loop that adds a number next to the current peoples names
  } else {
    return "The line is currently empty.";
  }
}
