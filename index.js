var katzDeliLine = ['ada', 'ian'];
//var katzDeliLine = [];
var name = 'ada'

function takeANumber(katzDeliLine, name){
  katzDeliLine.unshift(name)
  console.log(katzDeliLine)
  return (katzDeliLine.length)
}

console.log(takeANumber(katzDeliLine, name))


function nowServing(katzDeliLine){
if (katzDeliLine.length === 0){
  return "The line is currently empty."
  //console.log('The line is currently empty.')
}
else {
  string = "Currently serving " + katzDeliLine[0] + "."
  katzDeliLine.shift()
  console.log(katzDeliLine)
  console.log(string)
  return string
}
}

//nowServing(katzDeliLine)
