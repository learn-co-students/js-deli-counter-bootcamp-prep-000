function takeANumber(katzDeli, name) {
  katzDeli.push(name);
  return `Welcome, ${name}. You are number ${katzDeli.length} in line.`
}


function nowServing(deliLine) {
  if (deliLine.length > 0) {
  return `Currently serving ${deliLine.shift()}.`;
}
  else { return "There is nobody waiting to be served!"
}
}


function currentLine(line) {
  var array = [];
  for (var i = 0; i < line.length; i++) {
    array.push( ` ${i + 1}. ${line[i]}` )
  }
  if (line.length > 0) {return `The line is currently:${(array.toString())}`
} else {return 'The line is currently empty.'
}
}
