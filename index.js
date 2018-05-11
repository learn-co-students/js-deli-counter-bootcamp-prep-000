function takeANumber (line, newPerson){
  //Adds a new person to the line, welcomes them, and tells them their number.
  
  line.push(newPerson);
  return `Welcome, ${newPerson}. You are number ${line.length} in line.`;
}

function nowServing(line) { /* Name the next person in line unless it's empty, and remove that person from the line */

  if(line.length === 0){
    return "There is nobody waiting to be served!";
  }
  else {
    return `Currently serving ${line.shift()}.`;
  }
}

function currentLine (line) { /*Note: according to the solution, this function is made easier with the join() method. */

  var lineString = "The line is currently: ";
  if(line.length === 0){
    return "The line is currently empty."; // Return this if the line is empty
  }
  
  else{ /* The line has at least one person. Add each person's name and place in line to lineString and return lineString. */
    lineString += "1. " + line[0];
  
    for (let i = 2; i <= line.length; i++){
      lineString = lineString + `, ${i}. ${line[i-1]}`;
    }  
   }
   
  return lineString;
}