function takeANumber(arr, name) {
  arr.push(name)
  var str =  `Welcome, ${name}. You are number ${arr.length} in line.`
  return str
}

function currentLine(arr) {
  var str = "The line is currently:"
  if (arr.length === 0) {
    return "The line is currently empty."
  }
  for (let i = 0; i < arr.length; i++) {
    if (i === arr.length - 1)
    {
      str += ` ${i+1}. ${arr[i]}`
    } else 
      str += ` ${i+1}. ${arr[i]},`
  }
  return str
}

function nowServing(arr) {
  if( arr.length === 0) {
    return "There is nobody waiting to be served!"
  } else {
    var next = arr.shift()
    return `Currently serving ${next}.`
  }
}