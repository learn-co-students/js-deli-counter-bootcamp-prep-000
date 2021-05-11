function takeANumber(deliLine, name){
  deliLine.push(name)
  var position = deliLine.length
  var sentence1 =  `Welcome, ${name}. You are number ${position} in line.`
  console.log(sentence1)
  return sentence1
}

function nowServing(deliLine){
  if (deliLine.length > 0) {
    var firstperson = deliLine[0]
    var sentence2 = "Currently serving " + firstperson + "."
    deliLine.splice(0, 1)
    console.log(sentence2)
    return sentence2
  }
  else {
    var emptyLineSentence = "There is nobody waiting to be served!"
    console.log(emptyLineSentence)
    return emptyLineSentence
  }
}

function currentLine(deliLine){
   if (deliLine.length > 0) {
      const positionNameList = []
      var positionCounter = 1
      while (positionCounter <= deliLine.length){
        var positionName = ' ' + positionCounter + '. ' + deliLine[positionCounter - 1]
        positionNameList.push(positionName)
        positionCounter += 1 }
      var sentence3 = "The line is currently:" + positionNameList.toString()
      console.log(sentence3)
      return sentence3
      }
  else {
      var emptyLineSentence = "The line is currently empty."
      console.log(emptyLineSentence)
      return emptyLineSentence
    }
}

var katzDeliLine = []
takeANumber(katzDeliLine, "Mary")
takeANumber(katzDeliLine, "Michael")
takeANumber(katzDeliLine, "Kevin")
currentLine(katzDeliLine)
nowServing(katzDeliLine)
currentLine(katzDeliLine)
nowServing(katzDeliLine)
currentLine(katzDeliLine)
nowServing(katzDeliLine)
currentLine(katzDeliLine)
console.log("Finished printing code - wahoo!")