//CODE
function takeANumber(katzDeliLine,newPerson){
  katzDeliLine.push(newPerson);
  return `Welcome, ${newPerson}. You are number ${katzDeliLine.length} in line.`
}
function nowServing (katzDeliLine){
  if(katzDeliLine.length === 0){
    return "There is nobody waiting to be served!";
  }else{
    //var personServed = katzDeliLine.shift();
    return `Currently serving ${katzDeliLine.shift()}.`
  }
}
function currentLine(katzDeliLine){
  var line = ['The line is currently:'];
  if(katzDeliLine.length === 0){
    return "The line is currently empty.";
  }else{
    for (var count = 0; count < katzDeliLine.length; count++){
      line[0] += ' ' + `${count+1}` + '. ' + `${katzDeliLine[count]}`;
      if (count < katzDeliLine.length-1){
        line[0] += ",";
      }
    }
  }
  return line[0];
}
