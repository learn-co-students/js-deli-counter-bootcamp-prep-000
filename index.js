
function takeANumber(katzDeli, newPerson) {
    //Welcome message for each new person added to the array
  katzDeli.push(newPerson);
  return `Welcome, ${newPerson}. You are number ${katzDeli.length} in line.`;
}

function nowServing(deliLine) {
  let lastCustomer = deliLine[0]
  if (deliLine.length > 0) {
    deliLine.shift(lastCustomer)
    return `Currently serving ${lastCustomer}.`
  } else {
      return `There is nobody waiting to be served!`
  }
}

function currentLine(deliLine){
  if (deliLine.length > 0){
    const orderedLine = []
    for (let i = 0, l = deliLine.length; i < l; i++) {
      orderedLine.push(`${i + 1}. ${deliLine[i]}`)
    }
    return `The line is currently: ${orderedLine.join(', ')}`
  } else {
    return `The line is currently empty.`
  }
}


