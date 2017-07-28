function takeANumber(katzDeliLine, nameOfPerson) {
  katzDeliLine.push(nameOfPerson);
  return `Welcome, ${nameOfPerson}. You are number ${katzDeliLine.length} in line.`
}

function nowServing(deliLine) { // return first person in line and remove him/her from line; nobody -> "There is nobody ..."
    if (deliLine.length < 1)
      return "There is nobody waiting to be served!"
    else {
      const tmp = deliLine.slice(0,1)
      deliLine.shift()
      return `Currently serving ${tmp[0]}.`
    }
}

function currentLine(deliLine) {
  if (deliLine.length < 1) {
    return "The line is currently empty."
  } else {
    var output = "The line is currently: "
    for (let i=0, l = deliLine.length; i<l; i++) {
      if (i<l-1)
        output += `${i+1}. ${deliLine[i]}, `
      else
        output += `${i+1}. ${deliLine[i]}`
    }
    return output
  }
}
