var katzDeli = []

function takeANumber(katzDeliLine, name) {
  katzDeliLine.push(name)
  return `Welcome, ${name}. You are number ${katzDeliLine.length} in line.`
}
function nowServing(line) {
  if(line.length > 0) {
    return `Currently serving ${line.shift()}.`
  } else {
    return "There is nobody waiting to be served!"
  }
}
function currentLine(line) {
  var result = "The line is currently"
  if(line.length === 0){
    return result + " empty."
  } else {
    result +=": "
    for(var i = 0; i < line.length; i++) {
      result += `${i+1}. ${line[i]}`
      if(i !== line.length - 1){
        result += ", "
      }
    }
    return result
  }
}