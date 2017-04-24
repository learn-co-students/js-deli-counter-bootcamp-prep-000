var katzDeliLine = []

function takeANumber(line, name){
  line.push(name);
  return "Welcome, " + name + ". You are number " + (line.indexOf(name) + 1) + " in line."
}

function nowServing(line){
  if (line.length > 0) {
    return "Currently serving ${line.shift()}."
  }
  else {
    return "There is nobody waiting to be served!"
  }
}

function currentLine(line){
  ar = []
  let count = 0
  if (line.length > 0){
    while (count < line.length){
      ar.push(" " + (count + 1) + ". " + line[count++])
    }
    return "The line is currently:" + ar
  } else {
    return "The line is currently empty."
  }
}