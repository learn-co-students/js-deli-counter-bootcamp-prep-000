var katzDeli = [];

function takeANumber(katzDeliLine, name) {
  katzDeliLine.push(name);

  var n = katzDeliLine.length;

  return `Welcome, ${name}. You are number ${n} in line.`;
}

function nowServing(line) {
  if (line.length === 0){
    return 'There is nobody waiting to be served!';
  }
  else{
    return `Currently serving ${line.shift()}.`;
  }
}

function currentLine(line) {
  const names = [];

  if (line.length === 0) {
    return "The line is currently empty."
  }
  else {
    for (var i = 0; i < line.length; i++) {
      names.push(` ${i + 1}. ${line[i]}`)
    }
  }
  return `The line is currently:${names}`
}
