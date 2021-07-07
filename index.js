function takeANumber(katzDeliLine, newName){
 
 katzDeliLine.push(newName)
  
  return `Welcome, ${newName}. You are number ${katzDeliLine.length} in line.`;
  
}
function nowServing(katzDeliLine){
  
  if (katzDeliLine.length === 0){
   return `There is nobody waiting to be served!` 
  }
  else{var i = 0
  do {
  return `Currently serving ${katzDeliLine.shift()}.`;
} 
  while (i < katzDeliLine.length);{
   
    i++
  }
  }

}

function currentLine(line){
  
 let countedLine = []  
 
  if (line.length === 0){
  return "The line is currently empty."
  }
  else{
  for (var i = 0; i < line.length; i++) {
  countedLine.push(` ${i + 1}. ${line[i]}`)
}

  }
  return `The line is currently:${countedLine}`
}