var katzDeli = [];
function takeANumber(katzDeliLine, name){
  katzDeliLine.push(name)
  var line = katzDeliLine.length
  if (line > 6) {
  return `welcome ${name} you are close you are number ${line - 1} in line.`
    
  }
  else
  { return `Welcome, ${name}. You are number ${line} in line.`
}
}
function nowServing(array){
  var serving = array.slice(0, 1)
  var cue = array.length
  array.shift(0)
  if (cue === 0 ){
    return"There is nobody waiting to be served!"
  } else {
    
    return `Currently serving ${serving}.`
  }
  
}
function currentLine(line){
  var cue = line.length
    var  array = []
   var index = 0
 while (index < line.length){
   
   var position = index + 1
    ab = line[index]
    
    array.push(' ' + position + '.'+' ' + line[index])
index += 1;
var ab = `The line is currently:${array}`
  }
  if (cue === 0){
    return "The line is currently empty."
  }else {
 return ab
  }
}
