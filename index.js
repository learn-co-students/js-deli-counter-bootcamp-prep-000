function takeANumber(line, name) {
line.push(name)
 return (`Welcome, ${name}. You are number ${line.length} in line.`)
}

function nowServing(katzDeliLine) {
  if (katzDeliLine.length === 0) {
    return  "There is nobody waiting to be served!"
  } else{
    var first = katzDeliLine[0]
    katzDeliLine.shift()
    return `Currently serving ${first}.`
  }
}

function currentLine(array, line) {
  if (array.length === 0) {
    return "The line is currently empty."
  }else{
    var first = array.length
    
    var newArray = [];
    
    for (let i = 0; i < array.length; i++){
    
    newArray.push(`${i + 1}. ${array[i]}`)
    }
    return `The line is currently: ${newArray.join(', ')}`
  }
}