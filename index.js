function takeANumber(line,name){
  line.push(name)
  return `Welcome, ${name}. You are number ${line.length} in line.`
}

function nowServing(currentLine){
  if (currentLine.length === 0){
    return "There is nobody waiting to be served!"
  } 
  else{
    var x = currentLine[0]
    currentLine.shift()
    return `Currently serving ${x}.`
  }
}

function currentLine(line){
  if (line.length === 0){
    return "The line is currently empty."
  }
  else{
    var sentence = "The line is currently:"
    for (var y = 0; y < line.length; y++){
      sentence = sentence + ` ${y + 1}. ${line[y]},`
    }
    sentence = sentence.substr(0, (sentence.length-1))
    return sentence
  }
  
}