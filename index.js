var katzDeli = []
function takeANumber(katzDeliLine, name) {
   katzDeliLine.push(`${name}`)
   var numberInLine = katzDeliLine.length
   return `Welcome, ${name}. You are number ${numberInLine} in line.`
}
function nowServing(katzDeli) {
  if(katzDeli.length > 0) {
    return `Currently serving ${katzDeli.shift()}.`
  } else {
    return "There is nobody waiting to be served!"
  }
}
function currentLine(line) {
  if(line.length  > 0) {
    for(var i = 0; i < line.length; i++) {
      line[i] = ` ${i+1}. ` + line[i] 
      }
          return "The line is currently:" + line
}
    else {
        return "The line is currently empty."
      }
    }
