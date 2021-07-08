function takeANumber(line, name) {
  line.push(name);
  return `Welcome, ${name}. You are number ${line.length} in line.`
}

function nowServing(line) {
  return line.length == 0 ? "There is nobody waiting to be served!" : `Currently serving ${line.shift()}.`;
}

function currentLine(line) {
  if ( line.length == 0 ) { return "The line is currently empty." }
  let output = "The line is currently: ";
  line.map( ( c, i ) => {
    output += ( i + 1 ) + ". " + c;
    if ( i < line.length - 1) { output += ", " }
  })
  return output;
}