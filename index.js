
function takeANumber(katzDeliLine, name) {
  console.log(katzDeliLine.push(name))
  var place= katzDeliLine.length
  return "Welcome, "+name+". You are number "+place+" in line."
}

function nowServing(katzDeliLine) {
  if( katzDeliLine.length >0) {  
    return `Currently serving ${katzDeliLine.shift()}.`
 
  } else{
    return "There is nobody waiting to be served!"
  }
}

function currentLine(katzDeliLine) {
  if( katzDeliLine.length>0) {
    return `The line is currently: 1. ${katzDeliLine[0]}, 2. ${katzDeliLine[1]}, 3. ${katzDeliLine[2]}`
  }else {
    return `The line is currently empty.`
  }
}