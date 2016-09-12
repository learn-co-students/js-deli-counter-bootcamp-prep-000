
var katzDeli = [];

function takeANumber(katzDeli, name) {
  katzDeli.push(name);
  return `Welcome, ${name}. You are number ${katzDeli.length} in line.`;
}

function nowServing(katzDeli) {
  if (katzDeli.length === 0) {
    return "There is nobody waiting to be served!"
  } else {
    return `Currently serving ${katzDeli.shift()}.`;
  }
}

function currentLine(line) {
  if (line.length > 0){
    var i = 0;
    var num = 1;
    var newLine = [];
    var lineString = 'The line is currently:'
      while (i < line.length) {
      newLine[i] = " " + num + ". " + line[i];
      i++;
      num++
    }
    } else {
      return 'The line is currently empty.'
  }


  return lineString + newLine;
}
