let takeANumber = function(KatzDeliLine, name) {
  KatzDeliLine.push(name)
  let position = KatzDeliLine.length
  return `Welcome, ${name}. You are number ${position} in line.`
}

let nowServing = function(KatzDeliLine) {
  if (KatzDeliLine.length == 0) {
    return `There is nobody waiting to be served!`
  }
  else {
    let current = KatzDeliLine.shift()
    return `Currently serving ${current}.`
  }
}

let currentLine = function(KatzDeliLine) {
  let list = "The line is currently: "
  if (KatzDeliLine.length == 0) {
    return `The line is currently empty.`
  }
  else {
    for (let i = 0; i < KatzDeliLine.length; i++){
    list = list + `${i+1}. ${KatzDeliLine[i]}, `
    }
  }
  return list.substring(0, list.length - 2)
}