function takeANumber(currentLine, name){
  currentLine.push(name);
  let place = currentLine.indexOf(name) + 1
  return `Welcome, ${name}. You are number ${place} in line.`
}

function currentLine(line){
  let cur = []
  if (line.length === 0){
    return "The line is currently empty.";
  } else {
    for(var i = 0; i < line.length; i++){
      cur.push(Number(i+1) + '. ' + line[i]);
    }
    for (var j = 0; i < cur.length; j++){
      return `The current line is ${cur[j]}`;
    }
  }
}