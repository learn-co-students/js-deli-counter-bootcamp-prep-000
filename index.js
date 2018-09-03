// assume there is a line of people implemented in Array.

// assuming arguments to be
// current line of people AND
// name of the new person
function takeANumber(katzDeliLine, newPerson) {
  katzDeliLine.push(newPerson);
  // tell them their position in "natural numbers"
  return `Welcome, ${newPerson}. You are number ${katzDeliLine.length} in line.`
}

// "call out" the next person;
// AND remove them from the queue
function nowServing(katzDeliLine) {
  let firstPerson = katzDeliLine.shift();

  return (undefined !== firstPerson ? `Currently serving ${firstPerson}.` : "There is nobody waiting to be served!")
}

//given an array of queuing people,
// return their position and name as a single string
function currentLine(katzDeliLine) {
  var str = "The line is currently"

  //Iterate through the array to change it to string
  for(var i = 0; i < katzDeliLine.length; i++) {
    let separator = (0 === i ? ":" : ",");

    str += `${separator} ${i+1}. ${katzDeliLine[i]}`;
  }

  if (str === "The line is currently") // emplies katzDeliLine was empty
      str += " empty."

  return str;
}
