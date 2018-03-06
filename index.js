function takeANumber(line,name){
  var position = line.length + 1

  return `Welcome, $(name). You are number $(position) in line.`
}

function nowServing(line){
  if(line.length){
    return "Now Serving" + line[0]
  } else{
    return "There is nobody waiting to be served!"
  }
}

function currentLine(line){
  var current = "The line is currently: "
  if (!line.length){
    return "The line is currently empty."
  } else{
    for (i=0;i<line.length;i++){
      current += i+1 + ". " + line[1] + ", "
    }
    }
  }
}
