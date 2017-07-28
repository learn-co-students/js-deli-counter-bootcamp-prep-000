function takeANumber(katzDeliLine,Name) {
  katzDeliLine.push(Name)
  return (`Welcome, ${Name}. You are number ${katzDeliLine.length} in line.`)
}

function nowServing(katzDeliLine){
  if (katzDeliLine.length===0){
    return "There is nobody waiting to be served!"
  } else {
    var firstPerson = katzDeliLine[0]
    katzDeliLine.shift()
    return `Currently serving ${firstPerson}.`
  }
}

function currentLine(katzDeliLine) {
  var sentence = `The line is currently: `
  if (katzDeliLine.length>0){
     for ( var i=0 ; katzDeliLine.length>i; i++ ) {
           sentence += (`${[i + 1]}. ${katzDeliLine[i]}, `)
            }
            return sentence.substring(0, sentence.length-2)
  }
  else {
      return "The line is currently empty."
    }
}
