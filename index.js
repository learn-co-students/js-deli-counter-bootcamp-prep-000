var katzDeli = [];

function takeANumber(katzDeli, name){
  katzDeli.push(name);
  var position = katzDeli.indexOf(name)+1;
  return `Welcome, ${name}. You are number ${position} in line.`; 
}

function nowServing(katzDeli){
  if (katzDeli.length === 0) {
    return 'There is nobody waiting to be served!';
  } else {
    var nextUp = katzDeli.shift();
    return `Currently serving ${nextUp}.`;
  }
}

function currentLine(line){
  var newLine = [];
  if (line.length === 0) {
    return 'The line is currently empty.';
  } else {
    for (var i = 0; i < line.length; i++){
      newLine.push(` ${i+1}. ${line[i]}`);
    }
    return `The line is currently:${newLine}`;
  }
}