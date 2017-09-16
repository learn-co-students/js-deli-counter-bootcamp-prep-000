function takeANumber(katzDeliLine, name) {
  katzDeliLine.push(name)
  // var x = katzDeliLine.length
  return `Welcome, ${name}. You are number ${katzDeliLine.length} in line.`
}

function nowServing(katzDeliLine) {
  if (katzDeliLine.length===0) {
    return ("There is nobody waiting to be served!")
  }
  else {
    var y = katzDeliLine.shift()
    return (`Currently serving ${y}.`)
  }
}

function currentLine(KatzDeliLine){
  if (KatzDeliLine.length===0) {
    return ("The line is currently empty.")
  } else {
    var retVal = "The line is currently: "
    for (let i=0; i < KatzDeliLine.length; i++) {
      //let number = i+1
      let name = KatzDeliLine[i]
      if (i===0) {
        retVal= retVal + `${i+1}. ${name}`
      }
      else {
        retVal = retVal + `, ${i+1}. ${name}`
      }
    }
    return retVal
  }
}
