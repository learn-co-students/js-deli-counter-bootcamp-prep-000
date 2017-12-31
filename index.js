var katzDeli = [];

function takeANumber(katzDeliLine, name){
  katzDeliLine.push(name)
  return(`Welcome, ${name}. You are number ${katzDeliLine.length} in line.`)
}


 function nowServing(katzDeli){
  if (katzDeli.length === 0){return 'There is nobody waiting to be served!'} else { for (var i = 0; i<katzDeli.length; i++) return(`Currently serving ${katzDeli.shift()}.`)}
}

function currentLine(katzDeliLine){
  let lineNames = ''
  if (katzDeliLine.length === 0){return "The line is currently empty."} 
  else
  
  {for (var i = 0; i<katzDeliLine.length; i ++) {
    lineNames = lineNames + ` ${i+1}. ${katzDeliLine[i]}${i < katzDeliLine.length -1 ? ',': ''}`
  }
    
    return (`The line is currently:${lineNames}`)
  }
  
}

