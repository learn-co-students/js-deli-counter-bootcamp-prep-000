var katzDeli = []

function takeANumber(katzDeli,name) {
  katzDeli.push(name)
  return `Welcome, ${name}. You are number ${katzDeli.length} in line.`
}

function nowServing (katzDeli) {
  var number = katzDeli.length
  if(number>0) {
    return `Currently serving ${katzDeli.shift()}.`
  }
  else {
    return "There is nobody waiting to be served!"
  }
}

function currentLine(katzDeli) {
  var number = katzDeli.length
  var array = []
  if(number>0) {
    for(var i=0;i<number;i++) {
      array.push(` ${i+1}. ${katzDeli[i]}`)}
      return `The line is currently:${array}`
    }
    else {
      return "The line is currently empty."
    }
  }
  
