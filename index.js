var katzDeli = []

function takeANumber(katzDeliLine,name) {
  katzDeliLine.push(name)
  return "Welcome, "+ name + ". You are number " + katzDeliLine.length + " in line."
}

function nowServing(katzDeliLine) {
  if(katzDeliLine.length === 0){
    return "There is nobody waiting to be served!"
  }else{
    return "Currently serving " + katzDeliLine.shift() + "."
  }
}
/*
function currentLine(line) {
  if (line.length === 0){
    return "The line is currently empty."
  }else{
    var lineNames = ["The line is currently: "]
    for (var i = 0; i<line.length-1; i++){
      var n = i + 1
      lineNames+= (n + ". " + line[i] + ", ")
    }
    n=line.length
    lineNames+=(n + ". " + line[n-1])
  }
  return lineNames
}
*/

function currentLine(line) {
  if (!line.length) {
    return "The line is currently empty."
  }

  const numbersAndNames = []

  for (let i = 0, l = line.length; i < l; i++) {
    numbersAndNames.push(`${i + 1}. ${line[i]}`)
  }

  return `The line is currently: ${numbersAndNames.join(', ')}`
};
