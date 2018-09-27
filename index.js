function takeANumber(line, name){
  line.push(name)
  return `Welcome, ${name}. You are number ${line.length} in line.`
}

function nowServing(deliLine){
  if (deliLine.length > 0) {
    return `Currently serving ${deliLine.shift()}.`
  }
  else
  { 
    return "There is nobody waiting to be served!"
  }
}


function currentLine(deliLine){
  
}