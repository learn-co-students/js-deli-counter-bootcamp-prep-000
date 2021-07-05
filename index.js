var katzDeliLine = [];

// Function to destructively add a new person to the end of the line and return a welcome message

function takeANumber(katzDeliLine, personName) {
  katzDeliLine.push(personName);
  var queueLength = katzDeliLine.length;
  return `Welcome, ${personName}. You are number ${queueLength} in line.`;
}


// Function written during pair programming activity
/*
var ticketNum = 0;

function takeANumber(katzDeliLine) {
  ticketNum ++;
  katzDeliLine.push(ticketNum);
  return `Welcome, you have ticket number ${ticketNum}`;
}
*/


// Function to accept current line of people and return a message about serving the first person in the line. If there is nobody waiting, a different message is returned

function nowServing(katzDeliLine) {
  if (katzDeliLine.length >= 1) {
    return `Currently serving ` + katzDeliLine.shift() + `.`;
  } else {
    return `There is nobody waiting to be served!`;
  }
}


// Function to accept current line of people and return the current line as string. If there is nobody in line, a different message is returned

function currentLine(katzDeliLine)
{
	var res = "The line is currently empty.";
	var i = 0;
	var queue = [];
	
	for(i = 0; i < katzDeliLine.length; i++)
	{
		queue.push(` ${i + 1}. ${katzDeliLine[i]}`);
		res = "The line is currently:" + queue;
	}
return res;
}


// Alternative approach to writing the currentLine function which produces the same result
/*
function currentLine(katzDeliLine) {
  if (katzDeliLine.length >= 1) {
    var i = 0;
    var transformedArray = [];
    while (katzDeliLine.length > i) {
      transformedArray.push(` ${i + 1}. ${katzDeliLine[i]}`);
      i++;
    }
  return `The line is currently:` + transformedArray;
  } else {
    return `The line is currently empty.`;
  }
}
*/
