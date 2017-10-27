function takeANumber(katzDeliLine, name){
  katzDeliLine.push(name)
  return `Welcome, ${name}. You are number ${katzDeliLine.length} in line.`
}

function nowServing(array){
  if (array.length === 0) {
    return `There is nobody waiting to be served!`
  }
  else {
    return `Currently serving ${array.shift()}.`;
  }
}

function currentLine(array){
  if (array.length === 0) {
    return "The line is currently empty."
  }
  else {
    var line = "The line is currently: "
    for (var n = 0; n < (array.length - 1); n++){
      line = line + `${n + 1}. ${array[n]}, `
    }
    line = line + `${array.length}. ${array[array.length-1]}`
    return line
  }
}
