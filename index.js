var katzDeli = [];

function takeANumber(katzDeli, name) {
  katzDeli.push(name);
  return `Welcome, ${name}. You are number ${katzDeli.length} in line.`
}

function nowServing(line){
  if(!line.length) {
    return "There is nobody waiting to be served!"
  } else {
    return "Currently serving " + line.shift() + ".";
  }
}

function currentLine(line) {
  var lineNameAndNumbers = [];
  
  if (!line.length) {
    return "The line is currently empty."
  }
  for (var i = 0; i < line.length; i++) {
    var name = line[i];
    
    lineNameAndNumbers.push((i + 1) + '. ' + name);
  }
  return "The line is currently: " + lineNameAndNumbers.join(', ')
}
