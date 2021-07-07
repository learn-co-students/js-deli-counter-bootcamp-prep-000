var katzDeliLine = [];
function takeANumber(katzDeliLine,customer){
  katzDeliLine.push(customer)
  return `Welcome, ${katzDeliLine[katzDeliLine.length-1]}. You are number ${katzDeliLine.length} in line.`
}

function nowServing(katzDeliLine){
  if (katzDeliLine.length===0){
    return "There is nobody waiting to be served!"
  } else {
    var cust = katzDeliLine[0]
    katzDeliLine.shift()
    return `Currently serving ${cust}.`
  }
}

function currentLine(katzDeliLine){
  var retString = ""
  if (katzDeliLine.length === 0){
    retString = "The line is currently empty."
  } else {
    retString = "The line is currently: "
    for (let i = 0; i <katzDeliLine.length; i++){
      retString = retString + `${i+1}. ${katzDeliLine[i]}`
      if (i < katzDeliLine.length-1){
        retString = retString + ", "
      }
    }
  }
  return retString
}
