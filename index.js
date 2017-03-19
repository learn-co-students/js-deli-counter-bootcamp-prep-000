var katzDeli = [];

function takeANumber(katzDeliLine, name) {
  katzDeliLine.push(name);
  console.log(katzDeliLine);
  return `Welcome, ${name}. You are number ${katzDeliLine.length} in line.`;
}


function nowServing(deliLine) {
  if (deliLine.length > 0) {
    var servingNow = deliLine[0];
    deliLine.shift();
    return `Currently serving ${servingNow}.`;
  } else {
    return "There is nobody waiting to be served!";
  }
}

function currentLine(line) {
  if (line.length > 0) {
    var servingNow = [];
    for (let i = 0; i < line.length; i++) {
      servingNow.push(` ${i + 1}. ${line[i]}`);
      console.log(servingNow);
    }
    return `The line is currently:${servingNow}`;
  } else {
    return "The line is currently empty.";
  }
}
