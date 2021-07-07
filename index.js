deliLine = [];

function takeANumber(line, name) {
  line.push(name);
  var position = line.indexOf(name);
  return `Welcome, ${name}. You are number ${position + 1} in line.`;
}


function nowServing(line) {
  if(line.length == 0) {
    return "There is nobody waiting to be served!";
}
  else
    return `Currently serving ${line.shift()}.`;
}

function currentLine(line) {
  var funcArray = [];
  let lame = "";
  if(line.length === 0) {return "The line is currently empty.";}
  for(var x =0; x < line.length; x++) {
    funcArray.push(` ${x+1}. ${line[x]}` );
  }
  return "The line is currently:" + funcArray;
}
