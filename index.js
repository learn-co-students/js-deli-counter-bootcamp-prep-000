function takeANumber(array, name) {
  array.push(name)
  return "Welcome, " + name + ". You are number " + (array.indexOf(name) + 1) + " in line."
}

function nowServing(array) {
  if (array.length === 0) {
    return "There is nobody waiting to be served!"
  } else {
    var current = array.shift()
    return "Currently serving " + current + '.'
  }
}

function currentLine(arr) {
  if (arr.length === 0) {
    return "The line is currently empty."
  } else {
    var current = ''
    for (var i = 0; i < arr.length; i++) {
      if (i === arr.length -1) {
        current += (i+1) + '. ' + arr[i]
      } else {
        current += (i+1) + '. ' + arr[i] + ', '

      }
    }
  }
  return "The line is currently: " + current
}
