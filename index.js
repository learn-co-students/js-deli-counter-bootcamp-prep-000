var katzDeli = []
function takeANumber(katzDeliLine, name){
  return `Welcome, ${name}. You are number ${katzDeliLine.push(name)} in line.`
}

function nowServing(katzDeliLine){
  var msg=""
  if (katzDeliLine.length >0){
    msg = `Currently serving ${katzDeliLine[0]}.`
    katzDeliLine.shift()
  return msg
}else {
  return "There is nobody waiting to be served!"
  }
}

function currentLine(line){
  var arrayLengh = line.length
  var cLine = "The line is currently:"
  var text=""
  if (arrayLengh>0){
    for  (var i =0; i<arrayLengh; i++){
      text = text + ` ${i+1}. ${line[i]}`
      if (i<arrayLengh-1){text = text+','}
    }
  }else
    {return "The line is currently empty."}
  return cLine + text
}
