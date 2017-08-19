var katzDeliLine = []

function takeANumber(deli, new_name){
  deli.push(new_name)
  for(var i = 0; i < deli.length; i++){
    if(new_name === deli[i]){
      return "Welcome, " + deli[i] + "." + " You are number " + (i + 1) + " in line."
    }
  }
}

function nowServing(array){
  if(typeof(array[0]) === 'string'){
    var next = array.shift()
    return "Currently serving " + next + "."
  }
  else{
    return "There is nobody waiting to be served!"
  }
}

function currentLine(line){
  var newLine = []
  if(typeof(line[0]) === 'string'){
    for(var i = 0; i < line.length; i++){
      newLine.push(" " + (i + 1) + ". " + line[i])
    }
    return `The line is currently:${newLine}`
  }
  else{
    return "The line is currently empty."
  }
}
