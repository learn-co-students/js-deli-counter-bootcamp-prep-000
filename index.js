var katzDeli = []

function takeANumber(katzDeliLine, name){
katzDeliLine.push(name)
return "Welcome, " + name + ". You are number " + katzDeliLine.length + " in line."
}

function nowServing(theLine){
  if (theLine.length === 0) {
  return "There is nobody waiting to be served!"
} else {
  return "Currently serving " + theLine.shift() + "."
}
}

function currentLine(line){
  if (line.length === 0){
    return "The line is currently empty."
  } else { 
    var array = []
    for(let i = 0; i < line.length; i++){
     array.push(`${i+1}. ${line[i]}`)
    }
    return (`The line is currently: ${array.join(", ")}`)
    }
}