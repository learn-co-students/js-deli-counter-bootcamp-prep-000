
function takeANumber(line, newPerson) {
  line.push(newPerson);
  return ("Welcome, " + newPerson + ". You are number " + line.length + " in line.");
}

function nowServing(line) {
  if( line.length >0 ) {
    var removedPerson = line.shift();
    return `Currently serving ${removedPerson}.`;
  }
  else return `There is nobody waiting to be served!`;
}

function currentLine(line) {
  var newLine =[];
  for( let i= 0; i< line.length; i++) {
    newLine.push(` ` + [i+1] + `. ` + line[i]) }
  if ( line.length === 0 ) {
    return "The line is currently empty.";
  }
  else return `The line is currently:` + newLine;
  
}