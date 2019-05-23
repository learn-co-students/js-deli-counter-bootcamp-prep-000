var katzDeli = []

function takeANumber (katzDeliLine, name){
  katzDeliLine.push(name)
  var i = katzDeliLine.length
  var position = i
  return "Welcome, " + name + ". You are number " + position + " in line."
}

function nowServing (katzDeliLine){
  var i = katzDeliLine.length
  if (i===0){
    return "There is nobody waiting to be served!"
  }else{
    var serving = katzDeliLine[0]
    katzDeliLine.shift()
    return "Currently serving " + serving + "."
  }
}

function currentLine(line){
  var positions = []
  if (line.length===0){
    return "The line is currently empty."
  }else{
    for (var i = 0; i<line.length; i++){
      var pos = i+1
      if (pos===1){
        positions.push(pos + ". " + line[i])
      }else{
        positions.push(" " + pos + ". " + line[i])
      }
    }
    return "The line is currently: " + positions
  }
}