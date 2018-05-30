var katzDeliLine = ['Mary', 'Mike', 'Kevin'];
 
function takeANumber(katzDeliLine, newName) {
  katzDeliLine = katzDeliLine.push(newName)
  var position = katzDeliLine.indexOf(newName)
  return `Welcome, ${newName}. You are number ${position + 1} in line`
}

function nowServing(katzDeliLine){
  if (katzDeliLine > 0) {
  return katzDeliLine.splice(0, 1) }
  else {
    return "There is nobody waiting to be served!"
  }
}

function currentLine (katzDeliLine){
   if (katzDeliLine.length > 0) {
      sentenceList = []
      num = 1
      while (num <= katzDeliLine.length){
        sentence = ' ' + num + '. ' + katzDeliLine[num - 1]
        sentenceList.push(sentence)
        num += 1 }
      finalsentence = "The line is currently:" + sentenceList.toString()
      console.log(finalsentence)
      return finalsentence
      }
  else {
      empty = "The line is currenly empty"
      console.log(empty)
      return empty
    }
}

takeANumber(katzDeliLine, 'Cathy')
nowServing(katzDeliLine)
currentLine(katzDeliLine)