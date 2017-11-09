var katzDeliLine=[];

function takeANumber(katzDeliLine, name) {
  katzDeliLine.push(name);
  return `Welcome, ${name}. You are number ${katzDeliLine.length} in line.`;
}

function nowServing(katzDeliLine) {
  if (katzDeliLine.length === 0) {
    return "There is nobody waiting to be served!";
  } else {
    return `Currently serving ${katzDeliLine.shift()}.`;
  }
}

function currentLine(katzDeliLine) {
  if (katzDeliLine.length === 0) {
    return "The line is currently empty.";
  } else {
    var theline = "The line is currently: ";
    for (let i = 0; i < katzDeliLine.length; i++) {
      theline += `${i+1}. ${katzDeliLine[i]}, `;
    }
    return `${theline.slice(0, -2)}`;
  }
}

// for loop syntax:
// for (let i = 0; i < 15; i++) { stuff }
