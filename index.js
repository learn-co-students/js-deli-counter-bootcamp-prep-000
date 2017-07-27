function takeANumber(katzDeliLine, name) {
  katzDeliLine.push(name)
  return (`Welcome, ${name}. You are number ${katzDeliLine.length} in line.`)
}

function nowServing(deliLine) {
  if (deliLine.length===0) {
    return ("There is nobody waiting to be served!")
  }
  else {
    var current=deliLine[0]
    deliLine.shift()
    return (`Currently serving ${current}.`)
  }
}

function currentLine(katzDeliLine) {
  if (katzDeliLine.length===0) {
    return ("The line is currently empty.")
  }
  else {
    var line=[]
    for (var i=0; i<katzDeliLine.length; i++) {
      line.push(` ${i+1}. ${katzDeliLine[i]}`)
    }
    return (`The line is currently:${line}`)
  }
}
