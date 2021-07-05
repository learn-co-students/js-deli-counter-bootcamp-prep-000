var katzDeli=[]
function takeANumber(katzDeli, newCustomer){
  katzDeli.push(newCustomer)
  return `Welcome, ${newCustomer}. You are number ${katzDeli.length} in line.`
}

function nowServing(katzDeli){
  if (katzDeli.length > 0) {
    var man = katzDeli.shift()
    return `Currently serving ${man}.`
  }
  else if (katzDeli.length === 0) {
    return `There is nobody waiting to be served!`
  }
}
function currentLine(currentLine){
  if(currentLine.length > 0){
    var message=[]
    for (var i = 0; i < currentLine.length; i++) {
    message.push(` ${i + 1}. ${currentLine[i]}`)

    }
    return `The line is currently:${message}`
  }else if (katzDeli.length === 0) {
    return `The line is currently empty.`
  }
}
