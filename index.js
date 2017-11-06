function takeANumber(katzDeliLine, name){
katzDeliLine.push(name)
return `Welcome, ${name}. You are number ${katzDeliLine.length} in line.`
}

function nowServing(katzDeliLine){
  if(katzDeliLine.length !== 0){
    return `Currently serving ${katzDeliLine.shift()}.`
  }else{
    return "There is nobody waiting to be served!"
  }
}
function currentLine(line){
if(line.length !==0){
  var output = 'The line is currently: '
  for(var i = 0; i <line.length; i++){
      output += `${i+1}. ${line[i]}`
      if(i<line.length-1){
        output += ', '
      }
  }
return output
}else {
  return "The line is currently empty."
}

}
