function takeANumber(katzDeliLine, name) {
  const katzDeli = []
  katzDeliLine.push(name)
  return `Welcome, ${name}. You are number ${katzDeliLine.length} in line.`
}

function nowServing(katzDeliLine) {
  if (!katzDeliLine.length) {
    return "There is nobody waiting to be served!"
    // return `Currently serving ${katzDeliLine[0]}.`
  } else {
    return `Currently serving ${katzDeliLine.shift()}.`
    // return "There is nobody waiting to be served!"
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
};



//   if (!katzDeliLine.legnth) {
//     return "The line is currently empty."
//   }
//   const numbersAndNames = []
//
//   for (let i = 0; i < katzDeliLine.length; i++) {
//     numbersAndNames.push(`${i + 1}. ${katzDeliLine[i]}`)
//   }
//   return `The line is currently: ${numbersAndNames.join(', ')}`
// };
