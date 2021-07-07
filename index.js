var katzDeliLine = []

function takeANumber(katzDeliLine, name) {
  katzDeliLine.push(name)
  let pos = katzDeliLine.indexOf(name) + 1
  return `Welcome, ${name}. You are number ${pos} in line.`
}

function nowServing(katzDeliLine){
  if (katzDeliLine.length > 0) {
    let curr = katzDeliLine[0]
    katzDeliLine.shift(1)
    return `Currently serving ${curr}.`
  } else { return "There is nobody waiting to be served!"}
}

function currentLine(katzDeliLine){
  if (katzDeliLine.length > 0) {
    let deliline = "The line is currently: "
    for (let i = 0; i < katzDeliLine.length; i++){
      if (i<katzDeliLine.length-1){
        let a = i+1
        let name = katzDeliLine[i]
        deliline = deliline + `${a}. ${name}, `
      } else{
        let a = i+1
        let name = katzDeliLine[i]
        deliline = deliline + `${a}. ${name}`}
    }
    return deliline
  } else {
    return "The line is currently empty."
  }


  }
