function takeANumber(katzDeliLine, name) {
  katzDeliLine.push(name)
  var numberInLine = katzDeliLine.length
  return `Welcome, ${name}. You are number ${numberInLine} in line.`
}

function nowServing(arr) {
  if(arr.length === 0) {
    return "There is nobody waiting to be served!"
  }
  var nextInLine = arr.shift(arr[0])
  return `Currently serving ${nextInLine}.`
}

function currentLine(arr) {
   var deliLineUp = []
   if (arr.length === 0) {
     return "The line is currently empty."
   } else  {
    for (var i = 0; i < arr.length; i++) {
      var nextUp = ` ${i+1}. ${arr[i]}`
      deliLineUp.push(nextUp)
    }
   }
   return "The line is currently:" + deliLineUp
 }
