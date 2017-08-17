const katzDeli = []

function takeANumber(katzDeli, name) {
    katzDeli.push(name)
    return `Welcome, ${name}. You are number ${katzDeli.length} in line.`
}

function nowServing(katzDeli) {
  if (katzDeli.length > 0)
  return `Currently serving ${katzDeli.shift()}.`
  else
  return "There is nobody waiting to be served!"}

  function currentLine(line) {
    var emptyArray = []
    var returnStr = "The line is currently: "
    if (line.length === 0)
      return "The line is currently empty."
    else {
        for (var i = 0; i < line.length; i++) {
          returnStr = returnStr + (i+1) + ". " + (line[i]);
          if (i != line.length-1) returnStr = returnStr + ", "
        }
    }
    return returnStr
  }
