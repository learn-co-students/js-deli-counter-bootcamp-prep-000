function takeANumber(line,name) {
  line.push(name)
return (`Welcome, ${name}. You are number ${line.length} in line.`)
}

function nowServing(line) {
  if (line.length === 0) {
    return ("There is nobody waiting to be served!")
  } else {
    var ns =`Currently serving ${line[0]}.`;
    line.shift()
    return ns
  }
}

function currentLine(line) {
  if (line.length === 0) {
    return ("The line is currently empty.")
  } else {
    var linebs = `The line is currently: `
    for (let i = 0; i < line.length; i++){
      if (i === line.length - 1){
        linebs = linebs + (`${i + 1}. ${line[i]}`)
      } else {
        linebs = linebs + (`${i + 1}. ${line[i]}, `)
      }
    }
    return linebs
  }
}
