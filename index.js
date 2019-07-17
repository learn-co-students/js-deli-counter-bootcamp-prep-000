var katzDeliLine = []

function takeANumber(katzDeliLine, newPerson){
  katzDeliLine.push(newPerson)
  return(`Welcome, ${newPerson}. You are number ${katzDeliLine.length} in line.`)
}

function nowServing(katzDeliLine){
  if (katzDeliLine.length === 0){
    return("There is nobody waiting to be served!")
  }else{
    var currentServe = `Currently serving ${katzDeliLine[0]}.`
    katzDeliLine.shift()
    return currentServe
  }
}

function currentLine(katzDeliLine){
  if (katzDeliLine.length === 0){
    return("The line is currently empty.")
  }else{
    var the_line = "The line is currently: "
    for (let i = 0; i < katzDeliLine.length; i++){
      if (i === katzDeliLine.length - 1) {
        var next_person = `${i + 1}. ${katzDeliLine[i]}`
      }else{
        var next_person = `${i + 1}. ${katzDeliLine[i]}, `
      }
      the_line = the_line + next_person
    }
  return the_line
  }
}
