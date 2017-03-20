
const takeANumber = (katzDeliLine, newname) => {
    katzDeliLine.push(newname)
  var a = katzDeliLine.indexOf(newname)
  var numberInLine = a + 1
  return `Welcome, ${newname}. You are number ${numberInLine} in line.`
}

const deliLine = ["Steven", "Blake", "Avi"]

function nowServing(deliLine) {
  if (deliLine.length > 0) {
      return `Currently serving ${deliLine.shift()}.`
  }
  else {
      return "There is nobody waiting to be served!"
  }
}


function currentLine(deliLine) {
  if (deliLine.length > 0) {
    let newDeliLine = []
    for (let counter = 0; deliLine.length > counter; counter++) {
      newDeliLine.push(`${counter + 1}. ${deliLine[counter]}`)
    }
    return `The line is currently: ${newDeliLine.join(", ")}`
  } else {
        return `The line is currently empty.`
    }
}
