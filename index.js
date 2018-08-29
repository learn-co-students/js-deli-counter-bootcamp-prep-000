function takeANumber(line, name){
line.push(name)
return `Welcome, ${name}. You are number ${line.length} in line.`  
} 

function nowServing(katzDeliLine){
  if (katzDeliLine.length === 0) {
    return `There is nobody waiting to be served!`
  } else {
    return `Currently serving ${katzDeliLine.shift()}.`;
  }
}

function currentLine(katzDeliLine){
  if (katzDeliLine.length===0) {
  return `The line is currently empty.` 
  } else {
    var string = [];
    
    for(let i = 0; i <= katzDeliLine.length-1; i++) {
      string.push(`${i+1}. ${katzDeliLine[i]}`); 
    }
    
    return `The line is currently: ${string.join(", ")}`;
  }
}