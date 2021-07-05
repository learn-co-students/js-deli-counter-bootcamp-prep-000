function takeANumber(katzDeliLine, customerName) {
  katzDeliLine.push(customerName);
  return "Welcome, " + customerName + ". You are number " + katzDeliLine.length + " in line.";
}

function nowServing(katzDeliLine) {
    if (katzDeliLine.length > 0) {
      var nowServingName = katzDeliLine.shift();
      return "Currently serving " + nowServingName + ".";
    } else {
      return "There is nobody waiting to be served!";
    }
}

function currentLine(katzDeliLine) {
  var katzDeliLineCurrentLine = [];
  if (katzDeliLine.length === 0) {
      return "The line is currently empty.";
  } else {
    let i = 0;
    while (katzDeliLine.length > i) {
      katzDeliLineCurrentLine.push( " " + (i + 1) + ". " + katzDeliLine[i]) + " ";
      console.log(i++);
    }
  }
  return "The line is currently:" + katzDeliLineCurrentLine;
}
