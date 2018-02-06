var katzDeli = [];

function takeANumber(katzDeliLine, name) {
  katzDeliLine.push(name);
  return `Welcome, ${name}. You are number ${katzDeliLine.length} in line.`;
}

function nowServing(katzDeliLine) {
  while (katzDeliLine.length > 0) {  
    return `Currently serving ${katzDeliLine.shift()}.`;
  }
  return "There is nobody waiting to be served!";
}

function currentLine(katzDeliLine) {
  var sentence = 'The line is currently: ';
  for (var i = 0; i < katzDeliLine.length; i++) {
    if (i === katzDeliLine.length-1) {
      sentence += `${i+1}. ${katzDeliLine[i]}`
    } else {
      sentence += `${i+1}. ${katzDeliLine[i]}, `;
    }
  }
  
  if (katzDeliLine.length === 0) {
    return "The line is currently empty."
  }
  else {
    return sentence;
  }
}