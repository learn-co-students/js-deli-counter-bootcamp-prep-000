function takeANumber(currLine, name) {
  currLine.push(name)
  return `Welcome, ${name}. You are number ${currLine.length} in line.`;
}
 function nowServing(currLine) {
   var message;
   if (currLine.length === 0) {
    message = 'There is nobody waiting to be served!';
  }else {
    message = `Currently serving ${currLine[0]}.`;
  }

   currLine.shift();
   return message
 }
function currentLine(currLine) {
  var message;
  if (currLine.length === 0) {
    message = 'The line is currently empty.'
  }else{
    message = `The line is currently: `
    for (let i = 1; i <= currLine.length-1; i++){
      message += `${i}. ${currLine[i-1]}, `;
    }
    message += `${currLine.length}. ${currLine[currLine.length-1]}`;

  }
  return message;

}
