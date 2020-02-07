var katzDeli = [ ];

function takeANumber(katzDeliLine, name) {
  katzDeliLine.push(name)

  return `Welcome, ${name}. You are number ${katzDeliLine.length} in line.`
};

function nowServing (line) {
  if (line.length < 1){
    return `There is nobody waiting to be served!`
  }
  return `Currently serving ${line.shift()}.`
};

function currentLine (katzDeliLine) {
  if (katzDeliLine.length < 1) {
    return `The line is currently empty.`
  }

  const numberAndNames = [ ]

  for (let n = 0, l = katzDeliLine.length; n < l; n++) {
    numberAndNames.push (`${n+1}. ${katzDeliLine[n]}`)
  }
  return `The line is currently: ${numberAndNames.join(`, `)}`
};
