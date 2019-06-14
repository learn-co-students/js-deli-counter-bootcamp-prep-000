number1 = ['Benny', 'Kelvin', 'Kenneth']

function currentLine(line) {
  if (line.length === 0) {
    return `The line is currently empty.`
  } else {for (let i = 0; i < line.length; i +=1 ) {
    console.log(`The line is currently: `)
    return `${i + 1}. ${line[i]}, `
  }
  }
}

console.log(currentLine(number1))