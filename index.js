function takeANumber(katzDeliLine, name) {
  katzDeliLine.push(name)
  return `Welcome, ${name}. You are number ${katzDeliLine.length} in line.`
}

function nowServing(line) {
  if(line.length === 0) {
    return "There is nobody waiting to be served!"
  } else {
    return `Currently serving ${line.shift()}.`
  }
}

function currentLine(line) {
  if(line.length === 0) {
    return "The line is currently empty."
  } else {
    let str = "The line is currently: "
    for(let i = 0; i < line.length; i++) {
      str += `${i + 1}. ${line[i]}${i == line.length - 1 ? '' : ', '}`
    }
    console.log(str);
    return str
  }
}
