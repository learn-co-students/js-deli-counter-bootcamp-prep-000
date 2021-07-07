var katzDeliLine = []

function takeANumber(katzDeliLine, customer){
  katzDeliLine.push(customer)
  return `Welcome, ${customer}. You are number ${katzDeliLine.length} in line.`
}

function nowServing(katzDeliLine){
  if (katzDeliLine.length > 0){
    var serving = katzDeliLine.shift()
    return `Currently serving ${serving}.`    
  } else {
    return "There is nobody waiting to be served!"
  }
}

function currentLine(katzDeliLine){
  var i = 1
  var lineAnnouncement = "The line is currently: "

  if (katzDeliLine.length > 0){
    while (katzDeliLine.length > 1){
      var customer = katzDeliLine.shift()
      lineAnnouncement = lineAnnouncement + i + ". " + customer + ", "
      ++i 
    } 
    lineAnnouncement = lineAnnouncement + i + ". " + katzDeliLine
    return lineAnnouncement 
  } 
  // else if (katzDeliLine.length = 1) {
  //   return lineAnnouncement + i + ". " + katzDeliLine
  // } 
  else {
    return "The line is currently empty."
  }
}