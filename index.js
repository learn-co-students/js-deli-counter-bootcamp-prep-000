function takeANumber(katzDeliLine, name){
  katzDeliLine.push(name)
  return "Welcome, "+name+". You are number " + katzDeliLine.length +" in line."
}

function nowServing(lineArray){
  if (lineArray.length === 0){
    return "There is nobody waiting to be served!"
  }
  var next = lineArray[0]
  lineArray.shift()
  return "Currently serving "+next +"."
}

function currentLine(line){
  if (line.length === 0){
    return "The line is currently empty."
  }else{
    var lineObject = {};
    for (var i=0; i<line.length; i++){
      lineObject[i+1] = line[i]
    }
    console.log(lineObject)
  }
  var item = ''
  var arr = []
  for (var key in lineObject){
    item = " "+key + ". " + lineObject[key]
    arr.push(item)
    var finalList = arr.toString()

  }
  return "The line is currently:" +finalList
}
