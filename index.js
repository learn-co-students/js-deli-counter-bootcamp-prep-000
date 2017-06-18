function takeANumber(katzDeli,custName) {
   katzDeli[katzDeli.length] = custName
   var str = "Welcome, " + custName + ". You are number " + katzDeli.length + " in line."
   return str
}

function nowServing(katzDeliLine) {
  if (katzDeliLine.length == 0) {
    return "There is nobody waiting to be served!"
  }
  else {
    var custName = katzDeliLine[0]
    katzDeliLine = katzDeliLine.splice(0,1)
    return "Currently serving " + custName + "."
  }

}

function currentLine(katzDeliLine) {
  if (katzDeliLine.length == 0) {
    return "The line is currently empty."
  }
  else {
    var str = "The line is currently: "
    var x = katzDeliLine.length - 1
    for (var i=0;i<katzDeliLine.length;i++) {
      x = i + 1
      str = str + x + ". " + katzDeliLine[i] + ", "
    }
    str = str.slice(0,-2)
    return str
  }
}
