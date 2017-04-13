

function takeANumber(array, name) {
  array.push(name)
  var n = array.indexOf(name) + 1
  return "Welcome, " + name + ". You are number " + n + " in line."
}

function nowServing(array) {
  var serve = array.shift()
  if (array.length === 0) {
    return "There is nobody waiting to be served!"
  } else {
    return "Currently serving " + serve + "."
  }
}

function currentLine (array) {
  //var i = 0
  //var customer = array[i] + ", "
  var list = "The line is currently: "
  if (array.length === 0) {
    return "The line is currently empty."
  } else {
    for (var i = 0; i < array.length; i++) {
      var customer = array[i] + ", "
      var n = i + 1 + ". "
      list += n + customer
    }
  }
  //var listSlice = list.slice(0,- 1)
  return list.slice(0,list.length - 2)
}