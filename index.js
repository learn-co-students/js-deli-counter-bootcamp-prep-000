var katzDeli = [];

function takeANumber(katzDeliLine, newCust){
  katzDeliLine.push(newCust);
  var position = parseInt(katzDeliLine.indexOf(newCust)) + 1;
  return `Welcome, ${newCust}. You are number ${position} in line.`;
}

function nowServing(deliLine){
  if (deliLine.length===0){
    return "There is nobody waiting to be served!";
  }
  else {
    return `Currently serving ` +deliLine.shift()+ '.';
  }
}

function currentLine(deliLine){
  if (deliLine.length===0){
    return "The line is currently empty.";
  }
  else {
    var lineString = [];
    for (let i=0; i<deliLine.length; i++){
      var position = i + 1;
      if (position<deliLine.length){
        lineString = lineString + `${position}. ` + deliLine[i] + ", ";
      }
      else {
          lineString = lineString + `${position}. ` + deliLine[i];
        }
    }
        return `The line is currently: ${lineString}`;
  }
    
}