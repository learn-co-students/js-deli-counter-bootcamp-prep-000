var katzDeliLine = [];

function takeANumber(katzDeliLine,name){
  katzDeliLine.push(name)
  return `Welcome, ${name}. You are number ${katzDeliLine.indexOf(name)+1} in line.`
}

function nowServing(katzDeliLine){
  var message = `Currently serving ${katzDeliLine[0]}.`
  katzDeliLine.shift()
  if(!katzDeliLine.length){
    message = 'There is nobody waiting to be served!'
  }

  return message
}

function currentLine(katzDeliLine){
  if(!katzDeliLine.length){
    return 'The line is currently empty.'
  }

  var line = []
  for(let i=0, l=katzDeliLine.length;i<l;i++){
    line.push(`${i+1}. ${katzDeliLine[i]}`)
  }
  return `The line is currently: ${line.join(', ')}`

}
