var katzDeliLine = [];

function takeANumber(katzDeliLine, name){
  katzDeliLine.push(name)
  return `Welcome, ${name}. You are number ${katzDeliLine.length} in line.`

}
function nowServing(katzDeliLine){
  if (katzDeliLine.length === 0){
    return "There is nobody waiting to be served!"
  }
  else {
    var result = `Currently serving ${katzDeliLine[0]}.`
    katzDeliLine.shift()
    return result
  }
}
function currentLine(katzDeliLine){
  if (katzDeliLine.length === 0) {
    return "The line is currently empty."
  }
  var result = `The line is currently:`
  for (var i = 0; i < katzDeliLine.length; i++){
    result += ` ${i+1}. `
    result += `${katzDeliLine[i]},`
  }
  result = result.slice(0,-1)
  return result
}
