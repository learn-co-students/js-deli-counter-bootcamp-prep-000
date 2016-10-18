var katzDeli = [];

function takeANumber(katzDeliLine, newPerson) {
  katzDeliLine.push(newPerson)
  var place = katzDeliLine.length
  return "Welcome, " + newPerson + ". You are number " + place + " in line."
}

function nowServing(katzDeliLine) {
  if(katzDeliLine.length==0) { return "There is nobody waiting to be served!"}
  else {
    var nowServed = katzDeliLine[0]
    katzDeliLine.shift()
    return "Currently serving " + nowServed + "."
  }
}

function currentLine(katzDeliLine) {
  if(katzDeliLine.length==0) { return "The line is currently empty."}
  else {
    var allText = "The line is currently: "
    for(var i=0; i<katzDeliLine.length; i++) {
      var j = i+1
      allText = allText + j + ". " + katzDeliLine[i]
      if(i<katzDeliLine.length-1) {allText = allText + ", "}
    }
  }
  return allText
}
