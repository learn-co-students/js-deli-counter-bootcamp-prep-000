var katzDeli = [];
var otherDeli = [];

function takeANumber(katzDeli,name) {
  while (katzDeli.length > 0) {
    otherDeli.push(name);
  var position = otherDeli.length;
  return `Welcome, ${name}. You are number ${position} in line.`;
  }
}

function nowServing(deliLine){
  for (var i=0; i < (deliLine.length -1); i++) {
  var name = deliLine[i];
  return `Currently serving ${name}.`;
  }
}

function currentLine(line){
  if(line.length > 0){
    for (var i = 0; i <= (line.length -1); i++){
      var position = i + 1;
      currentLine = [...currentLine,` ${position}. ${line[i]}`];
    }
    return "The line is currently: " + currentLine;
  } else {
    return "The line is currently empty."
  }
}
