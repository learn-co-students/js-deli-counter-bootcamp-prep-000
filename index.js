function takeANumber(line,name){ //take a number accepts customers position in line and name of customer.
 line.push(`${name}`);// .push, pushes customers name to end of line string
 return(`Welcome, ${name}. You are number ${line.length} in line.`);
}// "returning" full message using return command and interpolation of name and position in line/length of line.

function nowServing(katzDeliLine){//now serving accepts deli line/ use a whileLoop to check the length of the line as it fills before relaying a message
  let x = 0;
  while (katzDeliLine.length < x);{
    x++;
  }// using an if..else statement, if checks if the length is strictly equal to zero to relay nobody waiting to be served
  if (katzDeliLine.length === 0){
    return ("There is nobody waiting to be served!");
  }// else returns currently serving, interpolation of deli line and .shift to "shift" the next person in line, "serving/removing" the first element or "person" once done.
  else 
  return (`Currently serving ${katzDeliLine.shift()}.`);
}
function currentLine(katzDeliLine){// current line takes kats deli line as a parameter 
  let line = [];//created an empty array to place full line in
  if (katzDeliLine.length === 0){ // if statement to check if the line is empty, if it is relay return message
    return (`The line is currently empty.`); 
  } else {// else use forLoop to push elements or "persons" into line array with .push
     for (let i = 0; i < katzDeliLine.length; i++){
    line.push(`${i + 1}`+ "." + " " + `${katzDeliLine[i]}`);//interpolation of index position plus 1 for ease of use for UI, only adding a single name and position at a time with [i]
  }
  return ("The line is currently:"+ " "+ line.join(", "));//completing full sentence with line array being "joined" to properly puncuate sentence.
  }
}