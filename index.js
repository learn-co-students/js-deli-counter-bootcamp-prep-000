var katzDeli = []

function takeANumber(line, name) {
  line.push(name)
  var string = `Welcome, ${name}. You are number ${line.length} in line.`
  return string
}

function nowServing(deliLine) {
  var array = []
    if (deliLine.length === 0) {
      return "There is nobody waiting to be served!"
    } else {
      return `Currently serving ${deliLine.shift()}.`
    }
}


function currentLine(katzDeliLine){
if (katzDeliLine.length === 0){
  return  "The line is currently empty."
  } else {
  var customerLine = []
    for (let i = 0; i < katzDeliLine.length; i++){
    customerLine.push(`${i + 1}. ${katzDeliLine[i]}`)
}
return "The line is currently: " + customerLine.join(", ")
}
}
