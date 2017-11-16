var katzDeli = []
function takeANumber(katzDeliLine, name){
  var position = katzDeliLine.length
  katzDeliLine[position] = name
  position++
  return "Welcome, " + name + ". You are number " + position + " in line."
}
function nowServing(katzDeliLine){
  if(katzDeliLine.length === 0){
    return "There is nobody waiting to be served!"
  }else{
    return "Currently serving " + katzDeliLine.shift() + "."
  }
}
function currentLine(line){
  if(line.length === 0){
    return "The line is currently empty."
  }else{
    var message = "The line is currently:"
    for(let i = 0; i < line.length; i++){
      message += ` ${i+1}. ${line[i]},`
    }
    return message.slice(0, -1)
  }
}
