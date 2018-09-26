var katzDeliLine = [];

function takeANumber(current, person){
  current.push(person)
  return(`Welcome, ${person}. You are number ${current.length} in line.`)
}

function nowServing(current){
  if (current.length === 0) {
    return "There is nobody waiting to be served!"
  }
  else{
    var p = current.shift()
    return `Currently serving ${p}.`
  }
}

function currentLine(current){
  if (current.length === 0){
    return "The line is currently empty."
  }
  else {
    var s = "The line is currently: "
    for(let i = 0; i < current.length; i++){
      if(i < current.length-1){
        s = s + `${i+1}. ${current[i]}, `
      }
      else{
        s = s + `${i+1}. ${current[i]}`
      }
    }
  }
  return s
}