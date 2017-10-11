var katzDeliLine = []

function takeANumber(katzDeliLine, name){
    katzDeliLine.push(name)
    return `Welcome, ${name}. You are number ${katzDeliLine.length} in line.`

}

function nowServing(katzDeliLine){
  if (katzDeliLine.length == 0) {
    return "There is nobody waiting to be served!"
  }   else {
      return `Currently serving ${katzDeliLine.shift()}.`
      }


}

function currentLine(line) {
  if (!line.length) {
    return "The line is currently empty."
  }

  const numbersAndNames = []

  for (let i = 0, l = line.length; i < l; i++) {
    numbersAndNames.push(`${i + 1}. ${line[i]}`)
  }

  return `The line is currently: ${numbersAndNames.join(', ')}`
}
