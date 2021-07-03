var katzDeli = [];

function takeANumber(katzDeli, name){
  katzDeli.push(name);
  return `Welcome, ${name}. You are number ${katzDeli.length} in line.`;
}

function nowServing (line){
  if (line.length === 0){
    return "There is nobody waiting to be served!";
  } else {
    return `Currently serving ${line.shift()}.`;
  }
}

function currentLine(line){
  if (line.length === 0){
    return "The line is currently empty.";
  } else {
    var daLine = `The line is currently: 1. ${line[0]}`;
    for (var i = 1; i < line.length; i++){
      daLine = `${daLine}, ${i + 1}. ${line[i]}`;
    }
    return daLine;
  }
}