var katzDeli = []

function takeANumber(katzDeliLine, name) {
  var place = katzDeliLine.length + 1
  katzDeliLine.push(name)
  return "Welcome, " + name + ". You are number " + place + " in line."
}


function nowServing(array) {
     if  (0 < array.length ) {
       return "Currently serving " + array.shift()+"."

  }
    else {
        return "There is nobody waiting to be served!"
    }
  }


function currentLine(line) {
  var one = []
  for (var i = 0; i < line.length; i++) {
    one.push(` `+[i+1]+`. `  + line[i])
  }
  if (line.length === 0) {
    return 'The line is currently empty.'
  }
    else {
        return "The line is currently:" + one
    }
}
