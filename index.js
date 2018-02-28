var katzDeli = [];

function takeANumber (katzDeliLine, custName) {
  //katzDeli = [];
  katzDeliLine.push(custName);
  
  return "Welcome, " + custName + ". You are number " + katzDeliLine.length + " in line.";
}

function nowServing (katzDeliLine) {
  var deliLine = "";
  
  if (katzDeliLine.length === 0) {
    return 'There is nobody waiting to be served!';
  }
  else {
    deliLine = katzDeliLine[0]
    katzDeliLine.shift();
    return "Currently serving " + deliLine + ".";
    
  }  
}

function currentLine (katzDeliLine) {
  if (katzDeliLine.length === 0) {
    return "The line is currently empty."
  }
  else {
    var line = "The line is currently:";
    for (let i = 0; i < katzDeliLine.length; i++) {
      line = line + " " + (i+1) + ". " + katzDeliLine[i];
      if ((i+1) < katzDeliLine.length) {
        line = line + ",";
      }
    }
    return line;
  }
}



