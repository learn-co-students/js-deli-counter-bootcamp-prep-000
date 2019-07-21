function takeANumber(deliLine, customerName) {
  deliLine.push(customerName);

  if (deliLine.length === 0) {
    return "The line is currently empty."
  } else {
    return `Welcome, ${customerName}. You are number ${deliLine.length} in line.`;
 }
}

function currentLine(deliLine) {
  const deliLineString = deliLine
    .map((customerName, index) => `${index + 1}. ${customerName}`)
    .join(", ");
  if (deliLine.length === 0) {
      return "The line is currently empty."}
    else {
      return `The line is currently: ${deliLineString}`;
 }
}

function nowServing(deliLine) {
  const nowServedCustomer = deliLine.shift();

  if (!nowServedCustomer) {
    return "There is nobody waiting to be served!";
  }
else {
  return `Currently serving ${nowServedCustomer}.`;
  }
}
