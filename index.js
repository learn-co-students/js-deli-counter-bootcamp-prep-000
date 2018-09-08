var katzDeliLine = [];

function takeANumber (line, name){
  line.push(name)
  return `Welcome, ${name}. You are number ${line.length} in line.`;
}

function nowServing(line) {
  if (line.length > 0){
    
    return `Currently serving ${line.shift()}.`
    
  }
  else {return "There is nobody waiting to be served!"
    
  }
  
}

var linn = []
function currentLine (line){
 if (line.length>0){
  for (var i = 0; i<line.length ; i++){
    linn.push(` ${i+1}. ${line[i]}`)
  }
  return "The line is currently:" + linn
}
else{
  return "The line is currently empty."
}
}





