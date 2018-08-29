function takeANumber(katzDeliLine, person) {
  katzDeliLine.push(person); 
return (`Welcome, ${person}. You are number ${katzDeliLine.length} in line.`) 
}
function nowServing(katzDeliLine) {
  var firstInLine = katzDeliLine[0] 
  if (katzDeliLine.length > 0) { 
    katzDeliLine.shift()
  return (`Currently serving ${firstInLine}.`)
  } 
  else {
  return ("There is nobody waiting to be served!")
  }
}
function currentLine(line) {
  if (line.length > 0) {
    var n = 1;
    for (let i = 0; i < line.length; i++) {
      line[i] = ` ${n}. ${line[i]}`;
      n++;
    }
    return (`The line is currently:${line}`)
  }
  else {
    return ("The line is currently empty.")
  }
}