var katzDeliLine = [];

function takeANumber(katzDeliLine, newCustomer){
  katzDeliLine.push(newCustomer);
  var spotInLine = katzDeliLine.length;
  return `Welcome, ${newCustomer}. You are number ${spotInLine} in line.`
}

function nowServing(katzDeliLine){
  if (katzDeliLine[0] === undefined){
    return "There is nobody waiting to be served!"
  }
  else{
    var nowServing = katzDeliLine[0];
    katzDeliLine.shift();
    return `Currently serving ${nowServing}.`
  }
}

function currentLine(line){
  if (line[0] === undefined){
    return "The line is currently empty."
  }
  else{
    var loopLength = line.length;
    var lineCounter = 1;
    var finalOutput = `The line is currently:`
    for (var i = 0; i < loopLength; i++){
      if (i === loopLength - 1){
        finalOutput = `${finalOutput} ${lineCounter}. ${line[i]}`
        lineCounter++;
      }
      else{
        finalOutput = `${finalOutput} ${lineCounter}. ${line[i]},`
        lineCounter++;
      }
    }
    return finalOutput;
  }
}
