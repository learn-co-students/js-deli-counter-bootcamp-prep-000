function takeANumber(line, name) {
  line.push(name);
    return `Welcome, ${name}. You are number ${line.indexOf(name) + 1} in line.`;
}

function nowServing(line) {
  let firstPerson = line[0];
  
  if (line.length > 0) {
    line.shift();
    return `Currently serving ${firstPerson}.`;
  } else if (line.length === 0) {
    return "There is nobody waiting to be served!";
  }
}

function currentLine(line) {
  let lineOfPeople = [];
  
  for (let i = 0; i < line.length; i++) {
    lineOfPeople.push(`${i + 1}. ${line[i]}`);
  }
  
  if (line.length > 0) {
     return `The line is currently: ${lineOfPeople.join(', ')}`;
   } else if (line.length === 0) {
     return "The line is currently empty.";
   } 
}