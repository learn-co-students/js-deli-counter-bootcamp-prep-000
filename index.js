function takeANumber(currentLine, newName) {
  let placeInLine = ''
  // first push the new name in to the current line
  currentLine.push(newName)
  // then iterate thru the current line, use the values in the current line array to form the return statement
  for (let i = 0; i < currentLine.length; i++) {
    if (currentLine.length === 1) {
      return `Welcome, ${currentLine[0]}. You are number ${i + 1} in line.`
    } else {
      return `Welcome, ${currentLine[currentLine.length - 1]}. You are number ${currentLine.length - 1 + 1} in line.`
    }
  }
}


function nowServing(katzDeliLine) {
  // accepts an array of people, return array[0], then pops it off
  // katzDeliLine = ['Ada'] -> "Currently serving Ada."
  // if katzDeliLine.length === 0, return "There is nobody waiting to be served!"

  return katzDeliLine.length === 0 ? `There is nobody waiting to be served!`
    : katzDeliLine.length === 1 ? `Currently serving ${katzDeliLine.pop()}.`
    : `Currently serving ${katzDeliLine.shift()}.`
}

function currentLine(array) {
  let currently = 'The line is currently:';
  // accepts an array
  // iterates thru array, appends ${i + 1}.array[value] to return statement.
  // if array.length === 0: return 'The line is currently empty'.
    if (array.length === 0) {
      return `The line is currently empty.`
    } else {
      for (let i = 0; i < array.length; i++) {
        if (array.length === 1) {
          currently += ` ${i + 1}. ${array[0]}`
        } else {
          currently += ` ${i + 1}. ${array[i]},`
        }
      }
      let final = currently.split('')
      final.pop()
      return final.join('')
    }
}