var katzDeli = [];
var otherDeli = [];

function takeANumber(katzDeli,name) {
  katzDeli.push(name);
  var position = katzDeli.length;
  return `Welcome, ${name}. You are number ${position} in line.`;
}

function nowServing(deliLine){
  if (deliLine.length > 1) {
  for (var i=0; i < (deliLine.length -1); i++) {
  var name = deliLine[i];
  deliLine.shift();
  return `Currently serving ${name}.`;
    }
  } else {
    return 'There is nobody waiting to be served!'
  }
}

function currentLine(otherDeli){
  var nowInLine = [];
  if(otherDeli.length > 0){
    for (var i = 0; i <= (otherDeli.length - 1); i++){
      var position = i + 1;
      nowInLine.push(` ${position}. ${otherDeli[i]}`);
    }
    return `The line is currently:${nowInLine}`;
  } else {
    return "The line is currently empty."
  }
}
