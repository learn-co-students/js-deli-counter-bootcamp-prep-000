
function takeANumber(katzDeliLine, name){
  katzDeliLine.push(name)
  return `Welcome, ${name}. You are number ${katzDeliLine.length} in line.`
}

function nowServing(line){
  if (line.length===0){
    return "There is nobody waiting to be served!"
  } else{
    return `Currently serving ${line.shift()}.`
  }
}

function currentLine(katzDeliLine){
  if (katzDeliLine.length===0){
    return "The line is currently empty."
  } else{
    var currentline = []
    for(let i=0; i<(katzDeliLine.length); i++){
      currentline.push(` ${i+1}. ${katzDeliLine[i]}`)
    }
  }
  return "The line is currently:" + currentline
}
