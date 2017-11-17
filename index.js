function takeANumber(array, name){
  var position
  array.push(name)

  position = array.indexOf(name) + 1
  return `Welcome, ${name}. You are number ${position} in line.`
}

function nowServing(array){
  var firstInLine = array[0]

  if (array.length > 0){
    array.shift()
    return `Currently serving ${firstInLine}.`
  } else {
    return "There is nobody waiting to be served!"
  }

}

function currentLine(array){
  var line = "The line is currently: "

  if (array.length > 0){
    for (var i = 0; i < array.length; i++){
      if (i < array.length - 1){
        line += `${i+1}. ${array[i]}, `
      } else {
        line += `${i+1}. ${array[i]}`
      }
    }
  } else {
    return "The line is currently empty."
  }

  return line

}
