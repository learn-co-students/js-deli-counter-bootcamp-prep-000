function takeANumber(currentLineOfPeople, newPerson) {
  var placeInLine = currentLineOfPeople.length + 1;
  currentLineOfPeople.push(newPerson);
  return `Welcome, ${newPerson}. You are number ${placeInLine} in line.`;
}

function nowServing(katzDeliLine) {
  var currentCustomer = "";
  if(katzDeliLine.length === 0) {
    return "There is nobody waiting to be served!";
  } else {
      currentCustomer = `Currently serving ${katzDeliLine[0]}.`;
      katzDeliLine.shift();
  }
  return currentCustomer;
}

function currentLine(line) {
  
  var string = "";
  
  if(line.length === 0) {
    string = "The line is currently empty.";
  return string;
  } else {
      string = "The line is currently: ";
    
      for(var i = 0; i < line.length; i++) {
        if (i === 0) {
            string = string + (i+1) + ". " + line[i];
        } else {
            string = string + ", " + (i+1) + ". " + line[i];
            } 
        }
      return string;
  }
  
}