var katzDeliLine = [];

function takeANumber(katzDeliLine, newName) {
  katzDeliLine.push(newName);
  return ("Welcome, " + newName +"." + " You are number " + katzDeliLine.length+ " in line.");
}

function nowServing(katzDeliLine) {
  if (katzDeliLine.length ===0){
    return "There is nobody waiting to be served!"
  }
  else {
    var firstName = katzDeliLine[0]
    katzDeliLine.splice(0, 1)
    return("Currently serving " + firstName + ".")
  }
}

function currentLine(katzDeliLine) {
  var line = []
  if(katzDeliLine>[]) {
    for(var i=0;i<katzDeliLine.length;i++) {
        line.push(` ${i+1}. ${katzDeliLine[i]}`);
    }
    return "The line is currently:" + line;
  }
  else {
    return ("The line is currently empty.");
    }
  }
  

    
    
    
  