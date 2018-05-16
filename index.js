var katzDeli = [];

function takeANumber(katzDeliLine, name){
  katzDeliLine.push(name)
  return `Welcome, ${name}. You are number ${katzDeliLine.length} in line.`
}

function nowServing(katzDeliLine){
  if(katzDeliLine.length > 0){
    return `Currently serving ${katzDeliLine.shift()}.`
  }
  return "There is nobody waiting to be served!"
}

function currentLine(katzDeliLine){
  if(katzDeliLine.length === 0) return "The line is currently empty."
  var res = "The line is currently: "
  
  for(var i=0; i<katzDeliLine.length; i++){
    res += `${i+1}. ${katzDeliLine[i]}${i < katzDeliLine.length-1 ? ', ':''}`
  }
  return res
}







