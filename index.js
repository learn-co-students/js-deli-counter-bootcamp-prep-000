var katzDeli = [];
function takeANumber(katzDeliLine, names){
  katzDeliLine.push(names)
return (`Welcome, ${names}. You are number ${katzDeliLine.length} in line.`)

}

function nowServing(katzDeliLine){
  var customer = katzDeliLine.shift()
  if (katzDeliLine.length > 0) {
    return `Currently serving ${customer}.`
  }
  else {
    return "There is nobody waiting to be served!"
  }

}

function currentLine(katzDeliLine){
  var array = []
  for (var i = 0; i < katzDeliLine.length; i++)  {
  array.push(` ${[i + 1]}. ${katzDeliLine[i]}`)
  }
   if (katzDeliLine.length > 0){
    return `The line is currently:${array}`
  }
    else {
      return "The line is currently empty."
    }
  }
