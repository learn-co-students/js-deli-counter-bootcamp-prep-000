//Pablo Argueta Deli Counter

//At the beginning of the day the array is empty.
var katzDeliLine = [];

//take number function
function takeANumber(katzDeliLine, name) {
  katzDeliLine.push(name); //to add to the back of the queue
  var positionInLine = 0; //variable to hold position in line
  for(var i = 0; i < katzDeliLine.length; i++) {
    if (katzDeliLine[i] === name){
      positionInLine = i + 1;
    }
  }
  return (`Welcome, ${name}. You are number ${positionInLine} in line.`);
}


//now ser function
function nowServing(katzDeliLine) {
  
   var nextCustomer; //hold the customer name that we will remove from the front of the queue/array
  
  if (katzDeliLine[0] === undefined){ //To check if the array is empty or undefined
    return "There is nobody waiting to be served!";
  }
  
  else {
  nextCustomer = katzDeliLine.shift(); //remove the name from the fron of the queue/array
  return `Currently serving ${nextCustomer}.`;
  }
}

function currentLine(katzDeliLine) {
  
  var currentLineString=[]; //empty array to hold the new string of names with current number position
  
  if(katzDeliLine[0] === undefined) { //to check if the array is empty or undefined
    return "The line is currently empty."
  }
  
  else {
    
    for(let i = 0; i < katzDeliLine.length; i++) { //iterate through the array to get name and match to current position and add to the empty array
      currentLineString.push(` ${i+1}. ${katzDeliLine[i]}`);
    }
      
  }
  return `The line is currently:${currentLineString}`;
}