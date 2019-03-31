function takeANumber (katzDeliLine, name){
  katzDeliLine.push(name)
  return`Welcome, ${name}. You are number ${katzDeliLine.length} in line.`
}

function nowServing (katzDeliLine){
  if(katzDeliLine.length > 0){
    var serving = katzDeliLine[0]
    katzDeliLine.shift()
    return `Currently serving ${serving}.`
  }else{
    return "There is nobody waiting to be served!"
  }
}


function currentLine(line){
  var newList = []
  if (line.length===0){
    return "The line is currently empty.";
  }for(var i =0; i<line.length; i++){
    if(i<line.length){
      newList.push(` ${i+1}. ${line[i]}`)
    }
  }
  return `The line is currently:${newList}`
}
