var katzDeli = [];

function takeANumber(katzDeliLine, name) {
  katzDeliLine.push(name)
return `Welcome, ${name}. You are number ${katzDeliLine.length} in line.`
  
}

function nowServing(katzDeliLine){
 var name
  if (katzDeliLine.length == 0){
  return "There is nobody waiting to be served!"}
  else {
   name = katzDeliLine.shift(name)
  return `Currently serving ${name}.`
    }
  }
  
function currentLine(deliLine){
  if (deliLine.length ===0){
    return "The line is currently empty."
  }

else {
    var line = `The line is currently: 1. ${deliLine[0]}`
    for (var i = 2; i <= deliLine.length; i++) {
      line = line + `, ${i}. ${deliLine[i-1]}`
    }
    return line
  }
}  