function takeANumber(arrayLine, name){
  var newPosition = arrayLine.length + 1;
  arrayLine.push(name);
  return `Welcome, ${name}. You are number ${newPosition} in line.`;
  
}
function nowServing(arrayLine){
  if (arrayLine.length === 0){
    return "There is nobody waiting to be served!";
  } else { 
    var firstPerson = arrayLine[0];
    arrayLine.shift();
    return `Currently serving ${firstPerson}.`;
  }
}

function currentLine(arrayLine){
  var returnString = "The line is currently: ";
  var position;
  var person;
  if (arrayLine.length === 0) {
    return "The line is currently empty.";
  } else {
    for (var i = 0; i < arrayLine.length; i++) {
      position = i + 1;
      person = arrayLine[i];
      returnString = returnString + position + ". " + person;
      if (position < arrayLine.length){
        returnString = returnString + ", ";
      }
    }
    return returnString;
  }
    
} 







