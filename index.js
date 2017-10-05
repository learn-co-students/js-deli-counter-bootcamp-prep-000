/* 
1. Declare a function named takeANumber.
2. Function accepts 2 parameters named katzDeliLine & name, whose values are number and string. 
3. When call function, return position in line.
*/
function takeANumber(line, name) {
  line.push(name);
  return `Welcome, ${name}. You are number ${line.length} in line.`;
}

/* 
1. Declare a function named currentLine.
2. Function accepts parameter named katzDeliLine, whose value is an array.
3. When call function, returns the current line.
*/
function currentLine(line) {
  if (!line.length) {
    return "The line is currently empty.";
  }
  const numbersAndNames = [];
  for (let i=0; i<line.length; i++) {
    numbersAndNames.push(`${i + 1}. ${line[i]}`);
  }
  return `The line is currently: ${numbersAndNames.join(', ')}`;
}

/* 
1. Declare a function named nowServing.
2. Function accepts parameter named katzDeliLine, whose value is an array.
3. Return the first person in line and then remove that individual from the line. 
4. If there is nobody in line, it should return "There is nobody waiting to be served!"
*/
function nowServing(line) {
  if (!line.length) {
    return "There is nobody waiting to be served!";
  }
  return `Currently serving ${line.shift()}.`;
}
