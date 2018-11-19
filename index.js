function takeANumber(peopleInLine, newCustomerName) {
  peopleInLine.push(newCustomerName)
  
  return "Welcome, " +  newCustomerName + ". You are number " +  peopleInLine.length + " in line."
  
}

function nowServing(currentLine){
  if (currentLine.length <=0) {
    return  "There is nobody waiting to be served!";
  } else {
    return  "Currently serving " + currentLine.shift() +".";
    
  }
}
  
function currentLine(lineOfPeople){
  var returnString = "The line is currently: "
  if (lineOfPeople.length === 0){
    
    return "The line is currently empty."
  } else {
    for (var i =0; i < lineOfPeople.length; i++){
      if ((i+1) == lineOfPeople.length){
        returnString += (i + 1) + ". " + lineOfPeople[i] 
      } else {
        returnString += (i + 1) + ". " + lineOfPeople[i] + ", "
      }
    }
  }
  
  return returnString
    
}//currentLine
  
