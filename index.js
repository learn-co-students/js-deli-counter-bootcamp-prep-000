function takeANumber(line , name){
  line.push(name)
  var placeInLine = line.length
  return `Welcome, ${name}. You are number ${placeInLine} in line.`
}

function nowServing(line){
  if(line.length === 0){
    return "There is nobody waiting to be served!"
  }else{
    var nextInLine = line.shift()
    return `Currently serving ${nextInLine}.`
  }
}

function currentLine(line){
  var length = line.length
  if(length === 0){
    return "The line is currently empty."
  }else{
    var outputString = "The line is currently: "
    for(var i = 0; i < length; i++){
        outputString += `${i+1}. ${line[i]}`
        if(i !== length - 1){
          outputString += ", "
        }
    }
    return outputString
  }
}
