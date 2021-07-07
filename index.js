var cLine = [];
// Current line while nobody is in the Deli

function takeANumber(cLine, name) {
  cLine.push(`${name}`);
  return `Welcome, ${name}. You are number ${cLine.length} in line.`;
  }
  
function nowServing(cLine) {
  let i = 0;
  while (i < cLine.length) {
    i++;
  }
  if (cLine.length === 0) {
    return "There is nobody waiting to be served!";
} else {
  return `Currently serving ${cLine.shift()}.`;
}
}

var line = [];

function currentLine(cLine) {
  let i = 0;
  while (i < cLine.length) {
    line.push(` `+[i+1]+`. `  + cLine[i]);
    i++;
  }
  if (cLine.length === 0) {
    return "The line is currently empty.";
  } else
  return(`The line is currently:` + line);
}
