var katzDeliLine = [];

function takeANumber(katzDeliLine, newPerson) {
  katzDeliLine.push(newPerson)
  var result = `Welcome, ${newPerson}. You are number ${katzDeliLine.length} in line.`
  return result
}


function nowServing(katzDeliLine) {
  var result = []
  if( katzDeliLine.length <= 0 ) {
    result.push("There is nobody waiting to be served!")
  }
  else {
    result.push(`Currently serving ${katzDeliLine[0]}.`) 
    katzDeliLine.shift();
  }
  return result
}

function currentLine(katzDeliLine) {
  var result = ""
  var i = 0
  
  //If the line is empty do nothing and alert user
  if(katzDeliLine <= 0) {
    return "The line is currently empty."
  }
  
  else {
    result += "The line is currently: "
    for(i = 0; i < katzDeliLine.length; i++ ) {
      
      //Check to see if 1 away from last element to remove the comma
      if( i+1 === katzDeliLine.length) {
        result += (i+1 + ". " + katzDeliLine[i])
      }
      
      else {
      result += (i+1 + ". " + katzDeliLine[i] + ", ")
      }
    }
  }
  
  return result
}