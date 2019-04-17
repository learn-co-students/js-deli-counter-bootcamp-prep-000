function takeANumber(myDeliLine, name) {
  myDeliLine.push(name);
  return `Welcome, ${name}. You are number ${myDeliLine.length} in line.`;
}

function nowServing(myDeliLine2) {
  if (myDeliLine2.length < 1) {
    return "There is nobody waiting to be served!";
  } else {
    var nextInLine = myDeliLine2[0]
    myDeliLine2.shift();
    return `Currently serving ${nextInLine}.`
    }
}

  function currentLine(myDeliLine3) {
    var lineSummary = []
    if (myDeliLine3.length < 1) {
      return "The line is currently empty.";
    } else {
      for (var i = 0, l = myDeliLine3.length; i < l; i++) {
        lineSummary.push(` ${i+1}. ${myDeliLine3[i]}`)
      }
    }
    return "The line is currently:" + lineSummary.toString()
  }
