
function takeANumber(katzDeli, newPersonName){
  katzDeli.push (newPersonName)
    return `Welcome, ${newPersonName}. You are number ${katzDeli.length} in line.`
 }


function nowServing(placeInLine){
  if (placeInLine.length > 0) {
      return `Currently serving ${placeInLine.shift()}.`
} else {
   return "There is nobody waiting to be served!"
  }
}

function currentLine(line){
 var newVar = []
  if (line.length > 0){
    for (let i = 0; i < line.length; i++){
      newVar.push(`${i + 1}. ${line[i]}`)
    } // 1. Bill
    return `The line is currently: ${newVar.join(", ")}`
} else {
  return "The line is currently empty."
}
}
