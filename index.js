function takeANumber (deliLine , name){
  deliLine.push(name)
  return `Welcome, ${name}. You are number ${deliLine.length} in line.`
}

function nowServing(deliLine){
  if (deliLine.length === 0) {return 'There is nobody waiting to be served!'}
    else {return `Currently serving ${deliLine.shift()}.`}

}

function currentLine(deliLine){
  if (deliLine.length === 0) {return 'The line is currently empty.'}
    else {
        const array = []
        for(let i = 0, l = deliLine.length; i < l; i++){
          array.push(`${i + 1}. ${deliLine[i]}`)
    }
    return `The line is currently: ${array.join(', ')}`
  }

}
