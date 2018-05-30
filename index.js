otherDeli = ["Steven", "Blake", "Avi"]

function takeANumber(katzDeliLine, name){
  katzDeliLine.push(name)
  var position = katzDeliLine.length
  //position = katzDeliLine.indexOf(name)
  var sentence1 =  `Welcome, ${name}. You are number ${position} in line.`
  console.log(sentence1)
  return sentence1
}

function nowServing(line){
  if (line.length > 0) {
    var firstperson = line[0]
    var sentence2 = "Currently serving " + firstperson + "."
    console.log(sentence2)
    line.splice(0, 1)
    return sentence2
  }
  else {
    console.log("There is nobody waiting to be served!")
    return "There is nobody waiting to be served!"
  }
}

function currentLine(line){
   if (line.length > 0) {
      const sentenceList = []
      var num = 1
      while (num <= line.length){
        var sentence = ' ' + num + '. ' + line[num - 1]
        sentenceList.push(sentence)
        num += 1 }
      var finalsentence = "The line is currently:" + sentenceList.toString()
      console.log(finalsentence)
      return finalsentence
      }
  else {
      var empty = "The line is currently empty."
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
const deliLine = ['Steven', "Blake", "Avi"]
nowServing(deliLine)
currentLine([])
currentLine(['Bill', 'Jane', 'Ann'])