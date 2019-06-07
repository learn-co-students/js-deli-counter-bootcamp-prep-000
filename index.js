function takeANumber(line, name){
  line.push(name)
  return `Welcome, ${name}. You are number ${line.length} in line.`
}

function nowServing(katzDeliLine){
  if (katzDeliLine.length > 0){
    let str = `Currently serving ${katzDeliLine[0]}.`
    katzDeliLine.shift()
    return str
  }
  else return "There is nobody waiting to be served!"
}

function currentLine(line){
  if (line.length > 0){
    let str = "The line is currently: "
    for (let i = 0; i < line.length -1; i++){
      str += `${i+1}. ${line[i]}, ` 
    }
    str += `${line.length}. ${line[line.length-1]}`
    return str
  }
  else return "The line is currently empty."
}