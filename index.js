


function takeANumber(currentLine,newName){
   currentLine.push(newName)
  return "Welcome, " + newName + ". You are number " + currentLine.length + " in line."
  
}

function nowServing(currentLine){
  
    if(currentLine.length <1)
{return "There is nobody waiting to be served!"}
  else {for(var i = 0; i<currentLine.length; i++){
    const firstInLine = currentLine[0]
    currentLine.shift()
    return "Currently serving " +
firstInLine  +  "."
    }
}
}

function currentLine(line){
  if(line.length <1){return "The line is currently empty."
} 
else {var revolvingLine = []
  for(var i = 0; i<line.length; i++){if(i===0){
 revolvingLine.push((i+Number(1)) + ". "+ line[i])}
 else{revolvingLine.push(" "+(i+Number(1)) + ". "+ line[i])}
  }
  return "The line is currently: " + revolvingLine
}
  
}