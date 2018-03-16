function takeANumber (katzDeliLine, newCust){
  katzDeliLine.push (newCust);
  return `Welcome, ${newCust}. You are number ${katzDeliLine.length} in line.`
}

function nowServing(katzDeliLine){
  if (katzDeliLine.length === 0){
    return "There is nobody waiting to be served!"
  } else {
    let front = katzDeliLine.shift();
    return `Currently serving ${front}.`;
  }
}

function currentLine (katzDeliLine){
  var lineString ="The line is currently";
  if (katzDeliLine.length === 0) {
    lineString += " empty."
  } else {
    lineString += ":";
    for (let i = 0; i < katzDeliLine.length; i++) {
      lineString += ` ${i+1}. ${katzDeliLine[i]}`;
      if (i < katzDeliLine.length - 1) {
        lineString += ","
      }
    }
  }
  return lineString
  }
  