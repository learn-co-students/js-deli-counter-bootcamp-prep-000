function takeANumber(katzDeliLine, name){
return `Welcome, ${name}. You are number ${katzDeliLine.push(name)} in line.`
}

function nowServing(deliLine){
  if (deliLine.length > 0){
    return `Currently serving ${deliLine.shift()}.`
  } else {
    return `There is nobody waiting to be served!`

  }
  }

function currentLine(katzDeliLine){
if(katzDeliLine.length == 0){
  return "The line is currently empty."
} else {
  var names = []
  for(var i = 0; i < katzDeliLine.length; i++){
    names.push(` ${i + 1}. ${katzDeliLine[i]}` )
  }
  return `The line is currently:${names}`
  }
}
