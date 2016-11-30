var katzDeli = [ ];

function takeANumber(katzDeli, name){
  katzDeli.push(name);
  for (var i = 0; i < katzDeli.length; i++){
    var newLine = [];
    newLine.push(`Welcome, ${name}. You are number ` + (katzDeli.length) + " in line.");
  } return newLine;
}

function nowServing(deliLine){
  while (deliLine.length > 1){
    return `Currently serving ${deliLine.shift()}.`;
    } return "There is nobody waiting to be served!";
}

function currentLine(line){
  var name = [];
  if(line.length > 1){
    return `The line is currently: 1. ${line[0]}, 2. ${line[1]}, 3. ${line[2]}`;
  } else {
    return `The line is currently empty.`
  }
}
