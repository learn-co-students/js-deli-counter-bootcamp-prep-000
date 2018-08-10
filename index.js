function takeANumber(currentLineOfPeople, newName){
// Add person to the currentLineOfPeople
  currentLineOfPeople.push(newName)

// return a welcome message
  return `Welcome, ${newName}. You are number ${currentLineOfPeople.length} in line.`
}

function nowServing(currentLineOfPeople){
  // special case if there is nobody in line
  if(currentLineOfPeople.length === 0){
    return "There is nobody waiting to be served!"
  } else {
  // the shift function will remove the first element in the array
  // and return what it has removed
    return "Currently serving " + currentLineOfPeople.shift() + "."
  }
}


function currentLine(currentLineOfPeople){
// copy of currentLineOfPeople
  var currentLineOfPeopleWithNumber = []

// special case for if there is nobody in line
  if(currentLineOfPeople.length === 0){
    return "The line is currently empty."
  } else {
    for(var i = 0; i < currentLineOfPeople.length; i++){

      // we want to manipulate the array to add a number infront of each index
      if(currentLineOfPeopleWithNumber.length === 0){
        currentLineOfPeopleWithNumber.push(`${i + 1}. ${currentLineOfPeople[i]}`);
      } else {
        currentLineOfPeopleWithNumber.push(` ${i + 1}. ${currentLineOfPeople[i]}`);
      }
    }
      

  }
    // now turn currentLineOfPeopleWithNumber into a string
    var newString = currentLineOfPeopleWithNumber.toString()

    return `The line is currently: ${newString}`
}