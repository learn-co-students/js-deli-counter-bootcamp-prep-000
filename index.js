var katzDeliLine = []; // With names of individuals in line

function takeANumber(katzDeliLine, name){ //accepts the current line of people
    katzDeliLine.push(name); //adds name to the end of the array
    return `Welcome, ${name},  You are number ${katzDeliLine.length} in line.`
};

function nowServing(katzDeliLine) { //should return the first person in line and then remove that individual from line
  if (katzDeliLine.length > 0) {
    return "Currently serving" + ${katzDeliLine.shift()} + "." //returns the removed element. In this case it would be the person being served
  } else {
    return "There is nobody waiting to be served!" //if no one is in line
  }
};

function currentLine(katzDeliLine){
  if (katzDeliLine.length > 0) { //if the line is greater than 0
    const katzDeliLineAndNumbers = []
    for (let i=0, l = katzDeliLine.length; i<l; i++) { // for loop
      katzDeliLineAndNumbers.push(`${i + 1}. ${katzDeliLine[i]}`) // the i+1 is purely to start counting at 1 rather than counting at 0.
      //And at the end here, we'll see the the number "pushed" before the line name
    }
    return "The line is currently: " + katzDeliLineAndNumbers.join(", ")
  } else {
    return "The line is currently empty";
  }
}

function getANumber(katzDeliLine){
  katzDeliLine.push(katzDeliLine[-1] + 1);
}
