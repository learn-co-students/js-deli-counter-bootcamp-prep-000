function takeANumber(line, name) {
 line.push(name);

 return `Welcome, ${name}. You are number ${line.length} in line.` ;
}
 
function nowServing(katzDeliLine) {
 if (katzDeliLine.length === 0) {
     return "There is nobody waiting to be served!"
 } else {
   return katzDeliLine.shift()
 }
}

function currentLine(katzDeliLine) {
  if (katzDeliLine.length === 0) {
    return "The line is currently empty."
  } else if (katzDeliLine.length === 1) { 
    var i = 0
    var result = console.log('1.' + katzDeliLine[i])
    return `The line is currently: ${result}`
  } else {
    var p = katzDeliLine.length + "."
    return `The line is currently: ${p} 
  }
}