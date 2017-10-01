
var array = ['Joe']
console.log(array)
function addPerson(katzDeli, b) {
  katzDeli.push(b)
  console.log("Welcome, " + b + ". You are number " + (katzDeli.length) + " in line.")
  console.log(katzDeli)
  return katzDeli
}

addPerson(array, 'Fred')
addPerson(array, 'Joe')

var katzDeli = [];
function takeANumber(katzDeliLine, newPerson) {
  katzDeliLine.push(newPerson)
  return `Welcome, ${newPerson}. You are number ${katzDeliLine.length} in line.`
}

takeANumber(katzDeli, 'Ada')

function nowServing(katzDeliLine) {
  var firstPerson = katzDeliLine[0]
  katzDeliLine.shift()
  if(katzDeliLine.length === 0) {
    return `There is nobody waiting to be served!`
  } else {
  return `Currently serving ${firstPerson}.`
}
}

function currentLine(katzDeliLine) {
  for(var i=0; i<katzDeliLine.length; i++){
    if(i===0) {
    katzDeliLine[i] = `${i+1}. ${katzDeliLine[i]}`
  } else {
    katzDeliLine[i] = ` ${i+1}. ${katzDeliLine[i]}`
  }
}
  if(katzDeliLine.length === 0) {
    return `The line is currently empty.`
  } else {
    return `The line is currently: ${katzDeliLine}`
  }
}
