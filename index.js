var katzDeliLine = []

function takeANumber(katzDeliLine, personName) {
  katzDeliLine.push(personName)
  return `Welcome, ${personName}. You are number ${katzDeliLine.length} in line.`
}

function nowServing(line) {
if (line.length > 0) {
    return `Currently serving ${line.shift()}.`
  }
   return "There is nobody waiting to be served!"
}

function currentLine(line) {
   if ( line.length === 0 ) {
     return "The line is currently empty."
   } else {
     const theLines = []

     let i = 0
     while (i < line.length) {
<<<<<<< HEAD
     theLines.push(` ${[i + 1]}. ${line[i]}`)
     i++
  }
  return "The line is currently:" + theLines
=======
     theLines.push(`${line[i](i)}. ${line[i]}`)
     i++
  }
  return "The line is currently:  " + theLines
>>>>>>> 7666acedfb4e282da8561dc1b143afea5eba09b0
   }
}