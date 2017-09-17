function takeANumber(array, name){
  array.push(name)
  return `Welcome, ${name}. You are number ${array.length} in line.`
}

function nowServing(array){
  if (array.length === 0) return "There is nobody waiting to be served!"
  return `Currently serving ${array.shift()}.`
}

function currentLine(array){
  if (array.length === 0) return "The line is currently empty."
  var out = `The line is currently: `
  for(var i=0; i<array.length; i++){
    out += `${i+1}. ${array[i]}${i===array.length-1 ? '':', '}`
  }
  return out
}
