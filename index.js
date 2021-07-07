var katzDeliLine = []
// Build an empty array representing the beginning of the day 

function takeANumber(katzDeliLine, name){
     // function defined that accepts two parrameters
    // used to push the elements to the end of the array
   //here we are welcoming the customers at the deli with their name
  //and informing them with the name and their number in the queue.
  
  katzDeliLine.push(name);
  return (`Welcome, ${name}. You are number ${katzDeliLine.length} in line.`);
}

function nowServing(katzDeli) {
  let i = 0;
  while (i < katzDeli.length) {
    i++;
  }
  if (katzDeli.length === 0) {
    return "There is nobody waiting to be served!";
  }
  else
  return (`Currently serving ${katzDeli.shift()}.`)
}
  //form a function that accepts current line of people
 // using a while loop, show that 
 // say that we were serving one person in the line
// If or else statement shows the whole line, where there is no one in the queue and then returns the else statement.

function currentLine(line) {
var theLine=[];
if(line>[]) {
  for(var i=0; i<line.length; i++) {
      theLine.push(` ${i+1}. ${line[i]}`);
    }
    return "The line is currently:" + theLine;
}
    else {
      return "The line is currently empty."
    }
}

// Open a function that accepts the current line of people
//then push everyone to the end of the line, which returns the required phrase