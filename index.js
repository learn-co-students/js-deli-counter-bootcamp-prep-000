var katzDeli = [];

function takeANumber(line, name){
  if (line.length === 0){
    line.push(name)
    return `Welcome, ${name}. You are number 1 in line.`
  } else {
    line.push(name)
    return `Welcome, ${name}. You are number ${line.length} in line.`
  }
  return line
}

function nowServing(line){
  if (line.length === 0){
    return "There is nobody waiting to be served!"
  } else {
    var name = line[0]
    line.shift()
    return `Currently serving ${name}.`
  }
  return line
}

function currentLine(line){
  if (line.length ===0){
    return "The line is currently empty."
  } else {
    var i = 0
    while (i<line.length){
      line[i] = ` ${i+1}. ${line[i]}`
      i++
    }
    return "The line is currently:" + line
    }

  return line

}
