function takeANumber (line, costumerName) {
  line.push(costumerName)
  return  `Welcome, ${costumerName}. You are number ${line.length} in line.`
}

function nowServing (line){

  if (line.length === 0){
    return "There is nobody waiting to be served!"
  } else {
    var mystring= `Currently serving ${line[0]}.`
    line.shift()
  }

  return mystring
}


function currentLine(line){

  if (line.length === 0){
    return "The line is currently empty."
  } else {
    var namesOrdered = []
    for (let i=1; line.length >= i; i++ ){
      namesOrdered.push (`${i}. ${line[i-1]}`)
    }
    return `The line is currently: ${namesOrdered.join(', ')}`
  }
}
