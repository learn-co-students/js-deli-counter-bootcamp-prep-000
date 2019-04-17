function takeANumber(currentLine, customer) {
  currentLine.push(customer);
  return `Welcome, ${customer}. You are number ${currentLine.length} in line.`;
}

function nowServing(deliLine) {
  if (deliLine.length === 0) {
    return "There is nobody waiting to be served!";
  } else {
    let nextCustomer = deliLine[0];
    deliLine.shift();
    return `Currently serving ${nextCustomer}.`;
  }
}

function currentLine(deliLine) {
  if (deliLine.length === 0) {
    return "The line is currently empty.";
  } else {
    let customers = [];
    for (let i = 0; i < deliLine.length; i++) {
      let customer = `${i+1}. ${deliLine[i]}`;
      customers.push(customer);
    }
    return `The line is currently: ${customers.join(', ')}`;
  }
}