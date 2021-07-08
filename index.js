var katzDeliLine = []
function takeANumber(katzDeliLine,name){
  katzDeliLine.push(name)
  var number = katzDeliLine.indexOf(name) + 1
  return(`Welcome, ${name}. You are number ${number} in line.`)
}

function nowServing(katzDeliLine){

    if (katzDeliLine.length===0){
    return('There is nobody waiting to be served!')
  }
    else if(katzDeliLine.length>=1){
    var currentpes
    return("Currently serving "+katzDeliLine.shift()+".")

    }
}
function currentLine(katzDeliLine){
  if (katzDeliLine.length===0){
  return("The line is currently empty.")
  }
    else if(katzDeliLine.length>=1){}
    return(`The line is currently: 1. ${katzDeliLine[0]}, 2. ${katzDeliLine[1]}, 3. ${katzDeliLine[2]}`)
}
