function takeANumber(katzDeli, name)  {
  katzDeli.push(name)
  return ("Welcome, " + name + ". You are number " + katzDeli.length + " in line.")
}

function nowServing(katzDeli) {
  if (katzDeli.length === 0) {return("There is nobody waiting to be served!")}
  else {
    var next = katzDeli[0]
    katzDeli.shift([0])
    return("Currently serving " + next +".")}
}

function currentLine(katzDeli)  {
  if (katzDeli.length === 0) {return("The line is currently empty.")}
  else {
    const line = []
    var i = 0
    while (i < katzDeli.length) {
      line.push(" " + (parseInt([i])+1) + ". " + katzDeli[i])
      i++
    }
    return ("The line is currently:" + line)
  }
}
