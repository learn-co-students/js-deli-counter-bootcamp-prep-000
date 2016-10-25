let katzDeli = new Array()
let katzDeliLine = new Array()

function takeANumber(currentLine, name) {
  currentLine.push(name)
  return `Welcome, ${name}. You are number ${currentLine.length} in line.`
}

function nowServing(currentLine) {
  if(currentLine.length>0) {
    let msg = `Currently serving ${currentLine[0]}.`
    currentLine.shift()
    return msg
  } else {
    return "There is nobody waiting to be served!"

  }
}

function currentLine(katzDeliLine) {
  if(katzDeliLine.length>0) {
    let str = "The line is currently:"
    for(let i=0;i<katzDeliLine.length;i++) {
      str += ` ${i+1}. ${katzDeliLine[i]}`
      if(i<katzDeliLine.length - 1) {
        str+= ","
      }
    }
    return str
  } else {
    return "The line is currently empty."
  }
}
