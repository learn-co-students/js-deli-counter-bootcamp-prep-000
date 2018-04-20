
function takeANumber(katzDeliLine, person) {
  katzDeliLine.push(person)
  return (`Welcome, ${person}. You are number ${katzDeliLine.length} in line.`)  
}

function nowServing(katzDeliLine) {
  if (katzDeliLine.length === 0) {
    return 'There is nobody waiting to be served!'
  } else {
    var served = katzDeliLine.shift()
    return `Currently serving ${served}.`
	}
}

function currentLine(katzDeliLine) {
  var str = ''	
  if (katzDeliLine.length === 0) {
    str = `The line is currently empty.`
  } else {
    str = `The line is currently:`
	for(var i = 0; i < katzDeliLine.length; i++) {
    	str += ` ${i + 1}. ${katzDeliLine[i]}${i+1 == katzDeliLine.length ? '' : ','}` 
	}

  }
  return str
}