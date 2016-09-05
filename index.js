var katzDeli = [];


function takeANumber(deliLine,name) {
  var num = deliLine.length
  deliLine[num] = name
  return `Welcome, ${name}. You are number ${num+1} in line.`
}

function nowServing(deliLine){

  if (deliLine.length === 0) {
    return "There is nobody waiting to be served!"
  } else {
    var name = deliLine[0]
    deliLine.shift()
    return `Currently serving ${name}.`
  }
}

function currentLine(deliLine) {
  var num = deliLine.length
  var str = ""
  if (num === 0) {
    return "The line is currently empty."
  } else {
    for (let i = 0; i < num; i++) {
      str = str + (i+1) + ". " + deliLine[i]
      if (i < num-1) {
        str = str + ", "
      }
      }
      return `The line is currently: ${str}`

    }
  }
