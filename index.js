otherDeli = ["Steven", "Blake", "Avi"]

function takeANumber(katzDeliLine, name){
  katzDeliLine.push(name)
  position = katzDeliLine.length
  //position = katzDeliLine.indexOf(name)
  var sentence1 =  `Welcome, ${name}. You are number ${position} in line.`
  console.log(sentence1)
  return sentence1
}

function nowServing(line){
  if (line.length > 0) {
    firstperson = line[0]
    sentence2 = "Currently serving " + firstperson + "."
    console.log(sentence2)
    return line.splice(0, 1)
  }
  else {
    console.log("There is nobody waiting to be served!")
    return "There is nobody waiting to be served!"
  }
}

function currentLine (line){
   if (line.length > 0) {
      sentenceList = []
      num = 1
      while (num <= line.length){
        sentence = ' ' + num + '. ' + line[num - 1]
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

var katzDeli = [];
takeANumber(katzDeli, "Ada")
takeANumber(otherDeli, "Grace")
var katzDeli = [];
takeANumber(katzDeli, 'Ada');
takeANumber(katzDeli, 'Grace');
takeANumber(katzDeli, 'Kent');
nowServing([])
const deliLine = ["Steven", "Blake", "Avi"]
nowServing(deliLine)
currentLine([])
currentLine(['Bill', 'Jane', 'Ann'])