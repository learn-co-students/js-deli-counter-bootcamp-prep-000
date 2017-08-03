var katzDeli= []
function takeANumber(katzDeliLine,name){
  katzDeli.push(name)
  katzDeliLine.push(name)

  return `Welcome, ${name}. You are number ${katzDeliLine.length} in line.`
}

function nowServing(deliLine){
  if(deliLine.length > 0){
    var name = deliLine[0]
    deliLine.shift()
    return `Currently serving ${name}.`
    deliLine.shift()

  }
  else{
    return "There is nobody waiting to be served!"
  }

}
function currentLine(katzDeliLine){
  var line = []
  if (katzDeliLine.length > 0){
    for(var i=0;i<katzDeliLine.length;i++){
      line.push(` ${i+1}. ${katzDeliLine[i]}`)
    }
    return `The line is currently:${line}`
  }
  else{
    return "The line is currently empty."
  }
}
