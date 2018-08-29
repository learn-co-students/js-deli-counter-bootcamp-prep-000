let deliLine = [];

function takeANumber(deliLine, customer) {
  deliLine.push(`${customer}`);
  for(let i = 0; i < deliLine.length; i++) {
    return `Welcome, ${customer}. You are number ${deliLine.length} in line.`
  }
}



function nowServing(deliLine) {
  if(deliLine.length === 0) {
    return 'There is nobody waiting to be served!';
  } else {
    return `Currently serving ${deliLine.shift()}.`;
  }
}



function currentLine(line) {
  let currentOrder = [];
  if (line.length > 0) {
    for (let i = 0; i < line.length; i++) {
      currentOrder.push(`${i + 1}. ${line[i]}`);
    }
    return `The line is currently: ${currentOrder.join(', ')}`;
  } else {
    return 'The line is currently empty.';
  }
}
