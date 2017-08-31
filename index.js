var katzDeliLine = []

function takeANumber(katzDeliLine, name){
  katzDeliLine.push(name);
    return `Welcome, ${name}. You are number ${katzDeliLine.length} in line.`
  }

function nowServing(katzDeliLine){
  if (katzDeliLine.length>0) {
    var firstline = katzDeliLine[0]
    katzDeliLine.shift()
    return `Currently serving ${firstline}.`
  } else {
    return `There is nobody waiting to be served!`
  }
}


function currentLine(katzDeliLine){
  var line = `The line is currently:`
  if (katzDeliLine.length>0){
    for (var i = 0; i < katzDeliLine.length; i++) {
      line = line + ` ${i+1}. ${katzDeliLine[i]},`
    }
    return line.slice(0,-1)
  }else{
      return `The line is currently empty.`
}
}
