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
      const arrayElementList = []
      var num = 1
      while (num <= deliLine.length){
        var arrayElement = ' ' + num + '. ' + deliLine[num - 1]
        arrayElementList.push(arrayElement)
        num += 1 }
      var sentence3 = "The line is currently:" + arrayElementList.toString()
      console.log(sentence3)
      return sentence3
      }
  else {
      var emptyArray = "The line is currently empty."
      console.log(emptyArray)
      return emptyArray
    }
}

otherDeli = ["Steven", "Blake", "Avi"]
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