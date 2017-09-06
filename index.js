var katzDeli = []

function takeANumber(line, name) {
  line.push(name)
  return `Welcome, ${name}. You are number ${line.length} in line.`
}

function nowServing(line) {
  if (line.length === 0) {
    return "There is nobody waiting to be served!"

  }
  else {
    var serving = `Currently serving ${line[0]}.`
    line.shift()
    return serving

  }

}

function currentLine(line) {
  if (line.length === 0) {
    return "The line is currently empty."
  }
  else {
    var lineSentence = "The line is currently: "
    for (var i = 0; i < line.length; i++) {
      lineSentence += `${i + 1}. ${line[i]}`
      if (i < line.length - 1) {
        lineSentence += `, `
      }
      console.log(lineSentence)
    }
  }
  console.log(lineSentence)
  return lineSentence
}

takeANumber(katzDeli, 'Ada')
takeANumber(katzDeli, 'Jon')
takeANumber(katzDeli, 'Joe')
nowServing(katzDeli)
nowServing(katzDeli)
nowServing(katzDeli)
nowServing(katzDeli)
currentLine(katzDeli)
