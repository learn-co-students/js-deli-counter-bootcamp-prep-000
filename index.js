var katzDeliLine = []

function takeANumber(katzDeliLine, name){
    katzDeliLine.push(name)
   return `Welcome, ${name}. You are number ${katzDeliLine.indexOf(name)+1} in line.`
}

function nowServing(katzDeliLine){
  if(katzDeliLine.length === 0)
    {return "There is nobody waiting to be served!"
    }
  else{
    return `Currently serving ${katzDeliLine.shift()}.`
  }
}

function currentLine(katzDeliLine){
  var currentLine = []
  if (katzDeliLine.length === 0){
    return "The line is currently empty."
  }
  else{
    for(var i=0; i<katzDeliLine.length; i++){
      currentLine.push(` ${i+1}. ${katzDeliLine[i]}`)
    }
  }
  return 'The line is currently:' + currentLine
}
