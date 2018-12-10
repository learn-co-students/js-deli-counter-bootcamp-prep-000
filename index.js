var katzDeliLine = [];

function takeANumber(line, name){
  line.push(name);
  return "Welcome, " + name + ". You are number " + line.length + " in line.";
}

function nowServing(current){
  let i = 0;
  while (i < current.length){
    i++;
  }
  if (current.length === 0){
    return "There is nobody waiting to be served!";
  }
  else {
    return (`Currently serving ${current.shift()}.`);
  }
}

function currentLine(current){
  var line = [];
  let i = 0;
  while (i < current.length){
    line.push(` ` + [i+1]+ `. ` + current[i]);
    i++;
  }
  if (current.length === 0){
    return "The line is currently empty.";
  }
  else {
return (`The line is currently:` + line);  
  }
}