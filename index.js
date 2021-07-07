var katzDeli = []
//var otherDeli = []

function takeANumber(katzDeliLine, name) {
  katzDeliLine.push(name)
  //katzDeli.push(name)
  return `Welcome, ${name}. You are number ${katzDeliLine.length} in line.`
}

function nowServing(katzDeliLine) {
  if(katzDeliLine.length === 0) {
    return "There is nobody waiting to be served!"
  } else {
    return `Currently serving ${katzDeliLine.shift()}.`
  }
}

function currentLine(katzDeliLine) {
  if(katzDeliLine.length === 0) {
    return "The line is currently empty."
  } else if(katzDeliLine.length === 1) {
    return `The line is currently 1. ${katzDeliLine[0]}.`
  } else {
    var list = []
    for(var i = 0; i < katzDeliLine.length; i++) {
      //Create new array with a space, number in line with period, and name. Array puts commas in for you.
      list.push(' '+(i+1)+'. '+katzDeliLine[i])
    }
    return 'The line is currently:'+list
  }
}
