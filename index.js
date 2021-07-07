var katzDeli = [];

function takeANumber(katzDeliLine,name) {
 katzDeliLine.push(name);
 katzDeli.push.apply(katzDeli,katzDeliLine)
 var postion = katzDeliLine.length;
 return `Welcome, ${name}. You are number ${postion} in line.`
}

function nowServing(line) {
  if (line.length === 0) {
    return "There is nobody waiting to be served!"    
  } else {
    return `Currently serving ${line.shift()}.`;
  }
}

function currentLine(katzDeliLine) {
  if(katzDeliLine.length === 0) {
    return "The line is currently empty."
  } else {
    var namePostion = [];
    for (let i = 0; i < katzDeliLine.length; i++) {
      namePostion.push(` ${i + 1}. ${katzDeliLine[i]}`)
    }
  return "The line is currently:" + namePostion
  }
}