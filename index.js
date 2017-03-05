function takeANumber(array, name) {
  array.push(name)
  var position = array.length
  return `Welcome, ${name}. You are number ${position} in line.`
}

function nowServing(array) {
  var n = array.length
  if (n>0) {
    var m=array.shift()
    return `Currently serving ${m}.`
  } else {
    return "There is nobody waiting to be served!"
  }
}

function currentLine(line) {
  var n = line.length
  var array =[]
  if (n===0) {
    return "The line is currently empty."
  } else {
    for (var i = 0; i<n; i++) {
      array.push(` ${i+1}. ${line[i]}`)
    }
  } return `The line is currently:${array}`

}
