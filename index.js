var deliLine = [];

function takeANumber(deliLine , personsName) {
       deliLine.push(personsName);
       return `Welcome, ${personsName}. You are number ${deliLine.length} in line.`;
}

function nowServing(deliLine){
    if(deliLine.length===0) {
      return "There is nobody waiting to be served!";
    }
    else{
      return `Currently serving ${deliLine.shift()}.`;
    }
}

function currentLine(deliLine) {
  if(deliLine.length===0)
  {
    return "The line is currently empty.";
  }
  else{
    var lineOut = "The line is currently: ";
    for (var i=0; i < deliLine.length; i++){
    lineOut+=String(i+1) + ". " +deliLine[i]+", ";
    }
    return lineOut.slice(0,lineOut.length - 2);
  }
}
  