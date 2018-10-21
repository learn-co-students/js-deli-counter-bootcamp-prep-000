
function takeANumber(katzDeliLine, name) {
  katzDeliLine.push(name);
  return `Welcome, ${name}. You are number ${katzDeliLine.length} in line.`
}

function nowServing(katzDeliLine){
  if (katzDeliLine.length === 0){ // if the array is empty say no one is waiting
    return "There is nobody waiting to be served!"
  } else {
    var nextInLine = katzDeliLine[0] // Adds the 1st person from katzDeliLine to a new array
    katzDeliLine.shift() // removes the 1st person from the katzDeliLine array
    return ("Currently serving "+nextInLine+".") // returns the person stored in the nextInLine array
  }

}

function currentLine(line) { // the current line of people
  if (line.length === 0) {
    return "The line is currently empty." // if line is empty output message
  } else {
    var newArray = []; // newArray receives currect position (index + 1) and associated name from for loop
    for (var i = 0; i < line.length; i++)  {
      newArray.push(` ${i + 1}. ${line[i]}`);
      }
    return 'The line is currently:' + newArray; // output current line status
    }
  }
