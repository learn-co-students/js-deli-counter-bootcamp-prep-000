
function takeANumber(line, custName) {
  line.push(custName);
  return `Welcome, ${custName}. You are number ${line.length} in line.`;
}

function nowServing(katzDeliLine) {
  if (katzDeliLine.length === 0) {
    return "There is nobody waiting to be served!"
  } else {
    let next = katzDeliLine[0];
    katzDeliLine.shift();
    return `Currently serving ${next}.`;
  }
}

function currentLine(katzDeliLine) {
  if (katzDeliLine.length === 0) {
    return 'The line is currently empty.';
  } else {
    let list = [];
    for (let i = 0; i < katzDeliLine.length; i++) {
      list.push(` ${i + 1}. ${katzDeliLine[i]}`); 
    } return `The line is currently:${list}`;
  }
}