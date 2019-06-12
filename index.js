function takeANumber(katzDeliLine, newName) {
  katzDeliLine.push(newName);
  var num = katzDeliLine.length;
  return `Welcome, ${newName}. You are number ${num} in line.`;
}

function nowServing(katzDeliLine){
    if(katzDeliLine.length===0) {
      return "There is nobody waiting to be served!";
    }
    else{
      return `Currently serving ${katzDeliLine.shift()}.`;
    }
}

function currentLine(line){
  if(line.length===0){
    return("The line is currently empty.")
  }
  else{
    var lineOut = "The line is currently: ";
    for (var i=0; i < line.length; i++){
    lineOut+=String(i+1) + ". " +line[i]+", ";
    }
    return lineOut.slice(0,lineOut.length - 2);
  }
}
