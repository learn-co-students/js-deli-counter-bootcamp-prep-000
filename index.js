deliLine = [];

function takeANumber(line, name) {
  line.push(name);
  var position = line.indexOf(name);
  return `Welcome ${name} you are number ${position + 1} in line`;
}


function nowServing(line) {
  if(line.length == 0) {
    return "There is nobody in line";
}
  else
    return `Now serving ${line.shift()}`;
}

function currentLine(line) {
  funcArray = [];
  for(var x =0; x < line.length; x++) {
    funcArray.push(`${x+1}, ${line[x]}`);
  }
  return "The line is currently: " + array;
}




