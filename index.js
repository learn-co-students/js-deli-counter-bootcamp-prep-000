//var katzDeliLine = [];

// katzDeliLine : array of strings
// name : string
// returns a message : string
//
// takeANumber takes a line
// and a name and it pushes the name to the end of the array
// and returns a string message.
function takeANumber(katzDeliLine, name) {
  katzDeliLine.push(name);
  return `Welcome, ${name}. You are number ${katzDeliLine.length} in line.`;
}

// katzDeliLine : array of strings
// returns a ??? : string
//
// nowServing takes a line in the form of an array. 
// returns a name
// sometimes it returns a message and sometimes a name.
// and returns a name only when the line is not empty. 
// if the array is empty then it returns a string message
//
function nowServing(katzDeliLine) {
  if (katzDeliLine.length > 0) {
    return `Currently serving ${katzDeliLine.shift()}.`; 
  } else {  
    return `There is nobody waiting to be served!`;
  }
}

// katzDeliLine : array of strings
// return : string message
//
// currentLine takes a line in a form of an array.
// returns a name and array 
// when the line is not empty, it returns a name a array
// if the array is empty it returns a string message
function currentLine (katzDeliLine) {
  if (katzDeliLine.length === 0 ) {
    return `The line is currently empty.`;
  } else { 
    let msg = `The line is currently:`;
    let newLine = [];
    for (let i = 0; i < katzDeliLine.length; i++) {
      newLine [i] =  ` ${[i + 1]}. ${katzDeliLine[i]}`;
  }
      msg += newLine.join(',');
    return msg;
   }
}
