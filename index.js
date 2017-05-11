var katzDeli = []
var i = 0
var current

function takeANumber (katzDeliLine, name) {

  katzDeliLine.push(name)

  if (katzDeliLine.length <= 1) {
    return `Welcome, ${name}. You are number 1 in line.`
  } else if (katzDeliLine.length > 1) {
    for (var s = 0; s < katzDeliLine.length; s++) {
      katzDeli[s] = `Welcome, ${katzDeliLine[s]}. You are number ${i+1} in line.`
      i++
    }
    return katzDeli[s-1]
    
  }
}

function nowServing (katzDeli) {

  if (katzDeli.length === 0) {
    return "There is nobody waiting to be served!"
  } else {
    current = katzDeli.shift()
    return `Currently serving ${current}.`
  }
}

function currentLine (katzDeliLine) {
  if (katzDeliLine.length >= 1) {

    var currently = [];
    var i = 0;

    while (i < katzDeliLine.length) {
      currently[i] = ` ${i+1}. ${katzDeliLine[i]}`
      i++
    }
          
    return `The line is currently:${currently}`
  
  } else 
  return "The line is currently empty."

}