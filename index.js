
var katzDeli = [];
function takeANumber(katzDeliLine, personName) {
  katzDeliLine.push(personName)
  var x = katzDeliLine.length
  return('Welcome, ' + personName + '. You are number ' + x + ' in line.')
}

function nowServing(katzDeliLine) {
  if(katzDeliLine.length > 0) {
    var t = katzDeliLine[0]
    katzDeliLine.shift()
    return("Currently serving " + t + ".")
  }
  else {
    return "There is nobody waiting to be served!"
  }
}

function currentLine(katzDeliLine) {
  var x = "The line is currently: "
  var b = 0
  for(var i = 0; i < katzDeliLine.length; i++) {
    var p = b + 1
    if (p < katzDeliLine.length){
      
    x += "" + p + ". " + katzDeliLine[b] + ", "
    b++
    }
    else {
      x += p + ". " + katzDeliLine[b]
    }
  }
  if(katzDeliLine.length > 0) {
  return(x)
}
else {
  return("The line is currently empty.")
}
}