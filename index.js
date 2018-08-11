function takeANumber(array,name) {
  array.push(name)
  var n = array.length
  return `Welcome, ${name}. You are number ${array.length} in line.`
}

function currentLine(array) {
  if (array.length > 0) {
    var names = ""
    for (var i = 0; i < array.length; ++i) {
      names += `${i+1}. ${array[i]}, `
    }
    names = names.slice(0, -2)
    return `The line is currently: ${names}`
  }
  else {
    return "The line is currently empty."
  }
}
function nowServing(array) {
  if(array.length > 0){
    return `Currently serving ${array.shift()}.`
  }
  else {
    return `There is nobody waiting to be served!`
  }
}
