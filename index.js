function takeANumber(katzDeliLine, newPerson){
  katzDeliLine.push(newPerson);
  return `Welcome, ${newPerson}. You are number ${katzDeliLine.length} in line.`;
}
function nowServing(katzDeliLine){
  if(katzDeliLine.length === 0){
    return "There is nobody waiting to be served!"
  }else{
    return `Currently serving ${katzDeliLine.shift()}.`;
  }
}

function currentLine(katzDeliLine)
{
  if(katzDeliLine.length === 0){
    return "The line is currently empty."
  }else{
    var current = "The line is currently: ";
    for(var i = 0; i < katzDeliLine.length; i++){
      current += `${i + 1}. ${katzDeliLine[i]}`
      if(i < katzDeliLine.length - 1){
       current += ', ';
      }
    }
    return current;
  }
}