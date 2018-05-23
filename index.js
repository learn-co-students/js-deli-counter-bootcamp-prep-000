function takeANumber(katzDeliLine, name){
  var position = katzDeliLine.length + 1
  katzDeliLine.push(name)
  return `Welcome, ${name}. You are number ${position} in line.`
}
function nowServing(katzDeliLine){
var name = []

  if(katzDeliLine.length > 0){
  /*store the first person's name in variable before modifying the deli line array*/
   name = katzDeliLine[0]
   katzDeliLine.shift()
  return `Currently serving ${name}.`
  } else{
    return "There is nobody waiting to be served!"
  }
}

function currentLine(katzDeliLine){
  var name = []
  
  if(katzDeliLine.length > 0){
    for(var i = 0, p = katzDeliLine.length; p > i; i++) {
    name.push(` ${i+1}. ${katzDeliLine[i]}`) /*add position and name to the end of array variable*/
    }
    return `The line is currently:${name}`
  } else{
    return "The line is currently empty."
  }
}