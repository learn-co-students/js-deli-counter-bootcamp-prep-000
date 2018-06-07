
function takeANumber(katzDeliLine, name) {
  return `Welcome, ${name}. You are number ${katzDeliLine.push(name)} in line.`;
}

function nowServing(katzDeliLine) {
  return katzDeliLine.length ? `Currently serving ${katzDeliLine.shift()}.` : 'There is nobody waiting to be served!';
}


function currentLine(katzDeliLine) {
  return katzDeliLine.length ?
    `The line is currently: ${katzDeliLine.map((e, i) => (i + 1)+'. '+e).join(", ")}`
    : "The line is currently empty.";
}
