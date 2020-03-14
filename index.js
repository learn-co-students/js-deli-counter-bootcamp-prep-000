function takeANumber(peopleInLine, newName){
  peopleInLine.push(`${newName}`);
  return(`Welcome, ${newName}. You are number ${peopleInLine.length} in line.`);
}

function nowServing(peopleInLine){
  let i = 0;
  while (i < peopleInLine.length){
    i++;
  }
  if (peopleInLine.length === 0){
    return "There is nobody waiting to be served!"
  }else {
    return `Currently serving ${peopleInLine.shift()}.`;
  }
}

var line = [];

function currentLine(peopleInLine){
  let i = 0;
  while (i < peopleInLine.length){
    line.push(` ` + [i + 1] + `. ` + peopleInLine[i])
    i++;
  }
  if (peopleInLine.length === 0){
    return "The line is currently empty."
  }else{
    return "The line is currently:" + line
  }
}
