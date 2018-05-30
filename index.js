katzDeliLine = ['Mary', 'Mike', 'Kevin'];
 
function takeANumber(katzDeliLine, name){
  katzDeliLine.push(name)
  position = katzDeliLine.length
  //position = katzDeliLine.indexOf(name)
  var sentence1 =  `Welcome, ${name}. You are number ${position} in line`
  console.log(sentence1)
  return sentence1
}

function nowServing(katzDeliLine){
  if (katzDeliLine > 0) {
    katzDeliLine.splice(0, 1) }
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