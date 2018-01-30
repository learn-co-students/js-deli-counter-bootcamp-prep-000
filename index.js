function takeANumber(katzDeliLine, name) {
  katzDeliLine.push(name)
  return(`Welcome, ${name}. You are number ${katzDeliLine.length} in line.`)
}

function nowServing(katzDeliLine) {
  if (katzDeliLine.length === 0) {
    return("There is nobody waiting to be served!")
  } else { var newKatzDeliLine = katzDeliLine.shift()
  return(`Currently serving ${newKatzDeliLine}.`)
}}
  
   function currentLine(katzDeliLine) {
     var theNumbers = []
    if (katzDeliLine.length === 0) {
      return("The line is currently empty.")
    } else {for(let i = 1; i <= katzDeliLine.length; i++){
      theNumbers.push(` ${i}. ${katzDeliLine[i-1]}`)
    }
      return(`The line is currently:${theNumbers}`)
  }}