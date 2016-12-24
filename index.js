function takeANumber(deli, name){
  deli.push(name);
  return `Welcome, ${name}. You are number ${deli.length} in line.`
}

function nowServing(deli){
  if(deli.length < 1) return "There is nobody waiting to be served!";
  var name = deli.shift();
  return `Currently serving ${name}.`
}

function currentLine(deli){
  if(deli.length < 1) return "The line is currently empty.";
  var line = "The line is currently: 1. " + deli[0];
  for(let i = 1; i < deli.length; i++){
    line += `, ${i+1}. ${deli[i]}`;
  }
  return line;
}
