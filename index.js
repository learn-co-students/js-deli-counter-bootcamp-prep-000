function takeANumber(line, name) {
  line.push(name)
  return `Welcome, ${name}. You are number ${line.length} in line.`
}

function nowServing(katzDeliLine) {
  var first = katzDeliLine[0]
  let linelength = katzDeliLine.length
  if (linelength > 0) {
    katzDeliLine.shift()
    return `Currently serving ${first}.`
  }
  else {return "There is nobody waiting to be served!"}
}

function currentLine(line) {
  var numline = ""
  if (line.length > 0) {
    let i = 0
      while (i < line.length) {
        if (i <= line.length - 2) {
        numline += (`${i + 1}. ${line[i]}, `)
          i++
        }
        else {numline += (`${line.length}. ${line[line.length - 1]}`)
          i++
        }
      }
    return `The line is currently: ${numline}`
  }
  else {return "The line is currently empty."}
}
