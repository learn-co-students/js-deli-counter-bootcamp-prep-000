function takeANumber(line, name) {
  line.push(name)
  return `Welcome, ${line[line.length - 1]}. You are number ${line.length} in line.`
}

function nowServing(line) {
  if (line.length === 0){
    return `There is nobody waiting to be served!`
  } else {
    return `Currently serving ${line.shift()}.`
    
  }
}

function currentLine(line) {
  console.log("The line is currently: ")
  if (line.length === 0) {
    return `The line is currently empty.`
  } else{
    let numbers = []
    for (let i = 0; i < line.length; i +=1 ) {
    numbers.push(` ${i + 1}. ${line[i]}`)
    }
    return `The line is currently:${numbers}`
  }
}