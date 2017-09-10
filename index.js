var katzDeliLine = []

function takeANumber(katzDeliLine,name){
  katzDeliLine.push(name)
  return `Welcome, ${name}. You are number ${katzDeliLine.indexOf(name)+1} in line.`
}

function nowServing(katzDeliLine){
  if (katzDeliLine.length < 1){
    return "There is nobody waiting to be served!"
  }
  else{
    var currentCustomer = katzDeliLine[0]
    katzDeliLine.shift()
    return `Currently serving ${currentCustomer}.`
  }
}

function currentLine(katzDeliLine){
  var queue = []
  if (katzDeliLine.length < 1){
    return "The line is currently empty."
  }
  else{
    for (var i = 0; i < katzDeliLine.length; i++){
        queue.push(` ${i+1}. ${katzDeliLine[i]}`)
        }
    return 'The line is currently:' + queue
    }
}
