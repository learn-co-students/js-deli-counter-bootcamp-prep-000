var katzDeliLine = [];

function takeANumber(line, name) {
  line.push(name);
  return `Welcome, ${name}. You are number ${line.length} in line.`;
}

function nowServing(line) {
  let i = 0;
  while (i < line.length) {
    i++;
  }
  
  if ( line.length === 0) {
    return "There is nobody waiting to be served!";
  } else {
    return `Currently serving ${line.shift()}.`;
  } 
}

function currentLine(line) {
  var katzDeliLine = [];
  let i = 0;
  while ( i < line.length) {
    katzDeliLine.push(` ` +[i +1] + `. ` + line[i]);
        i++;
  }
  if (line.length === 0){
    return "The line is currently empty.";
  } else {
    return "The line is currently:" + katzDeliLine;
  }
}

