var katzDeliLine = []
function takeANumber(katzDeliLine, name){
katzDeliLine.push(name)
var place = katzDeliLine.length
var welcome = `Welcome, ${name}. You are number ${place} in line.`
return welcome
}

function nowServing(katzDeliLine){
if(katzDeliLine.length===0 ){
  return 'There is nobody waiting to be served!'
  }
  else {
  return `Currently serving ${katzDeliLine.shift()}.`
  }
}

function currentLine(array){

if(array.length === 0 ){
  return `The line is currently empty.`
}
else {
var currentArray = []
  for (var i = 0; i < array.length; i++){
    currentArray.push(` ${i+1}. ${array[i]}`)
    }
     return `The line is currently:${currentArray}`
  }
}
