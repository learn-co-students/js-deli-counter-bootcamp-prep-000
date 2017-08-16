function takeANumber(array, name) {
  array.push(name)
  return "Welcome, " + name +". You are number " + array.length +" in line."

}

function nowServing(array) {
  if (array.length===0) {
    return "There is nobody waiting to be served!"
  }
  else {
    var temp = array.shift()
    return "Currently serving " + temp + "."
    

  }
  return array
}

function currentLine(array) {
  var message = ""
  if (array.length===0) {
    return "The line is currently empty."
  }
  else {
   var  i = 1
    do {
      message = message + i +". " + array[i-1] + ", "
      i++
    } while (i< array.length);


    return "The line is currently: " + message + i +". " + array[i-1]
  }
}
