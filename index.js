var katzDeli = []

function takeANumber(katzDeli, name){
  katzDeli.push(name)

  for (let i = 0; i < katzDeli.length; i++){
    if (name === katzDeli[i]){
      return `Welcome, ${name}. You are number ${i + 1} in line.`
    }
  }
}

function nowServing(katzDeli){
  if (katzDeli.length > 0){
    var first = katzDeli[0]
    katzDeli.shift()
    return `Currently serving ${first}.`
  }
  else {
    return "There is nobody waiting to be served!"
  }
}

function currentLine(line){
  if (line.length > 0){
    var name_list = []
    for (let i = 0; i < line.length; i++){
      name_list.push(` ${i+1}. ${line[i]}`)
    }
    return `The line is currently:${name_list}`
  }
  else if (line.length === 0){
    return "The line is currently empty."
  }
}
