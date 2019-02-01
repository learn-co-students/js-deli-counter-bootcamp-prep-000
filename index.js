var katzDeliLine = ["Steven", "Blake", "Avi", "Grace"];


function takeANumber(katzDeliLine, person) {
    katzDeliLine.push(person);
    //new person entering the deli is pushed into katzDeliLine
    return ("Welcome, " + person + ". You are number " + katzDeliLine.length + " in line.");
}

function nowServing(katzDeliLine) {
    if (katzDeliLine.length) {
      //as long as there is a line we store the first person in a variable
    var firstPerson = katzDeliLine[0];
      katzDeliLine.shift()
      //we romoved that person from the line
      return ("Currently serving " + firstPerson + ".")
    }
    else {
      //there is nobosy in line
      return "There is nobody waiting to be served!"
    }
  }

var line = [];
function currentLine(katzDeliLine) {
  for (let i=0; i < katzDeliLine.length; i++) {
    //we push into "line" variable "current position" = i+1 + "current person"
    line.push(" " + [i+1] + ". " + katzDeliLine[i]);
  }
  if (katzDeliLine.length === 0) {
    return "The line is currently empty.";
  } else {
    return ("The line is currently:" + line)
  }
}
