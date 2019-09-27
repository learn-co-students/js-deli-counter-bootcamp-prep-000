function takeANumber(currentLine, newCustomer) {
  currentLine.push(newCustomer) // adds next person to join the line to the end of the current line
  var x = currentLine.length // variable used to return the total number of people in line (the length of the line)
  return `Welcome, ${newCustomer}. You are number ${x} in line.`  //Great the new customer in line and tell them their place in line
}

function nowServing(currentLine) {
  if (currentLine.length > 0) {                   // if () is true and there are people in line do the following:
    var x = currentLine [0]                       // Assigns the first person in line to the variable x so it is not lost when the array is shortened
    currentLine.splice(0,1)                       // at index 0, remove 1 (the first person in line, whom I stored as a separate variable x)
    return `Currently serving ${x}.`              // Return text and the name of the person that is next in line that was attached to the variable x
  } else {
      return "There is nobody waiting to be served!" //If there was no one in line, this is the text that will be displayed
    }
}

function currentLine(line) {
  if (line.length > 0) {                          //if the length of the line is greater than 0 then...
    var x = [];                                   // initializing an array - creating a place to record names of people in the deli line
    for (var i = 1; i <= line.length; i++) {      //set the initial value of i to 1 and then increase it in increments of 1 until it is equal to the length of the line and then stop
      x.push(` ${i}. ${line[i-1]}`)                // adding names of the customers to the array according to their number in line
    }
    return `The line is currently:${x}`            //Return text along with the array formed by the for loop to display who is in line
  } else {
    return "The line is currently empty."         //Return text showing that the line is empty if there is no one in line (length of line=0)
  }
}
