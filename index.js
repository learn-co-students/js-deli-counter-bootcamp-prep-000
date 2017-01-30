function takeANumber(katzDeliLine, name){
  katzDeliLine.push(name)
  var line = katzDeliLine.length
  var str = `Welcome, ${name}. You are number ${line} in line.`
  return str
}

function nowServing(katzDeliLine){
  if(katzDeliLine.length === 0){
    return "There is nobody waiting to be served!"
  }else {
    var str = `Currently serving ${katzDeliLine[0]}.`;
    katzDeliLine.shift()  
  }
  return str  
}

function currentLine(line){
  var str = ""
  if(line.length === 0){
    return "The line is currently empty."
  }else {
    str += 1 + `. ${line[0]}`
    for (var i = 1; i < line.length; i++){
      var num = i + 1
      str += ", " + num + `. ${line[i]}`
    }
    var ln = "The line is currently: " + str
    return ln
  }
}