function takeANumber(katzDeliLine,name){
  katzDeliLine.push(name)
  return `Welcome, ${name}. You are number ${katzDeliLine.indexOf(name) + 1} in line.`
}
function nowServing(katzDeli){
  if (katzDeli.length==0){
    return 'There is nobody waiting to be served!'
  }
  else
    return `Currently serving ${katzDeli.shift()}.`
}
function currentLine(katzDeliLine,name){
  if (katzDeliLine.length===0){
    return 'The line is currently empty.'
  }
  else
    var textFill=[]
    for(var i=0;i<katzDeliLine.length;i++){
      textFill.push(` ${i+1}. ${katzDeliLine[i]}`)
    }
    return 'The line is currently:'+textFill
}
