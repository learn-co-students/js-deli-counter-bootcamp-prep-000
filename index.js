//empty array to start the day
var katzDeli = [];

//current line of people
var katzDeliLine = [];

/*
-takeANumber takes in current line and new patron name as paramters.
-Identifies lineposition based on current line (katzDeliLine[]) and 
assigns a position to the new patron.
-Adds new name to the current line array
-Adds +1 to linePosition so that the next patron to arrive will be in the proper index
-Returns plain-English response to patron greeting them and identifying their place in line.
*/

function takeANumber (katzDeliLine, newPatronName) {

  var linePosition = katzDeliLine.length;
  var linePositionResponse = (`You are number ${linePosition} in line`);
  katzDeliLine[linePosition] = newPatronName;
  
  linePosition++;
  return (`Welcome, ${newPatronName}. You are number ${linePosition} in line.`);
}


function nowServing (katzDeliLine) {
  
  if (katzDeliLine.length === 0) {
    
    return "There is nobody waiting to be served!"
  }
  
  else if (katzDeliLine.length !== 0) {
    
    var firstPatron = katzDeliLine[0];
    katzDeliLine.shift();
    return (`Currently serving ${firstPatron}.`);
  }
  
}


function currentLine (katzDeliLine, linePosition) {
  
  if (katzDeliLine.length === 0) {
    return "The line is currently empty."
  }
  
  else if (katzDeliLine !== 0) {
  
   
    var n = 0;  //n = index
    var x = 1;  //x = actual line position in plain english 
    var currentLineUp = "The line is currently:" //currentLineUp is the start of a string that will be appended with message later.
  
    while (n < katzDeliLine.length) {
      currentLineUp += (` ${x}. ${katzDeliLine[n]},`)
       n++;
       x++;
    }
   
   currentLineUp = currentLineUp.slice(0, -1);
   return currentLineUp;
  
  }
}
