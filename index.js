function takeANumber (currentLine, name ){
  var i = currentLine.length + 1;
  currentLine.push(name);
  
  return `Welcome, ${name}. You are number ${i} in line.`;
}

function nowServing (currentLine){
  if (currentLine.length > 0) {
 var firstPerson = currentLine[0];
  currentLine.shift();
  return `Currently serving ${firstPerson}.`;
    } else {return `There is nobody waiting to be served!`}
}


var line = [];

function currentLine(current){
  var i = 0;
  
  
  while (i < current.length) {
    line.push(` ` + [i+1] + `. ` + current[i])
    i++;
  }
  if (current.length !== 0) {
    return (`The line is currently:` + line);
  } else {
    return `The line is currently empty.`;
  }
  
}



