var katzDeli = [];

var katzDeliLine = [];

function takeANumber(katzDeliLine, personName) {
  if (katzDeliLine.length === 0) {
    katzDeliLine[0] = personName
  } else {
    katzDeliLine.push(personName)
  }
    return `Welcome, ${personName}. You are number ${katzDeliLine.length} in line.`
}

function nowServing(katzDeliLine) {
  if (katzDeliLine.length === 0) {
    return 'There is nobody waiting to be served!'
  } else {
    const n = katzDeliLine[0];
    katzDeliLine.shift();
    return `Currently serving ${n}.`
  }
}


function currentLine(line) {
  const ans = ["The line is currently:"]
  if(line.length === 0){
    return "The line is currently empty."
  } else {
    for(let i = 0; i < line.length; i ++) {
      if (i === line.length - 1) {
        ans.push(`${i + 1}. ${line[i]}`)
      } else
      ans.push(`${i + 1}. ${line[i]},`)
    }
    return ans.join(" ");
  }
}
