var katzDeli=[];

function takeANumber(katzDeliLine, name) {
  katzDeliLine[katzDeliLine.length] = name
  return `Welcome, ${name}. You are number ${katzDeliLine.length} in line.`
}

function nowServing(katzDeliLine){
  if (katzDeliLine.length > 0){
    var a = katzDeliLine[0]
    katzDeliLine.shift()
    return `Currently serving ${a}.`
  } else {
    return `There is nobody waiting to be served!`
  }
}

function currentLine(line) {
  if (line.length > 0){
    var a = [];
    for (let i=0;i<line.length;i++) {
      a[i] = ` ${i + 1}. ${line[i]}`
        }
    return `The line is currently:${[a]}`
  } else {
    return "The line is currently empty."
  }
}