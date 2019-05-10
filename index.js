function takeANumber(deliLine, customer_name) {
  deliLine.push(customer_name);
  var pos = deliLine.indexOf(customer_name) + 1;
  var resp = `Welcome, ${customer_name}. You are number ${pos} in line.`
  return resp;
}

function nowServing(deliLine) {
  if (deliLine.length === 0) {
    return 'There is nobody waiting to be served!'; 
  } else {
    return 'Currently serving ' + deliLine.shift() + '.';
  }
}

function currentLine(deliLine) {
  if (deliLine.length === 0) {
    return "The line is currently empty."
  }
  let resp = "The line is currently: ", sep = ', ';
  for (let counter = 0; counter < deliLine.length; counter++){
    if (counter == deliLine.length - 1) { sep = ''}
    resp += `${counter + 1}. ${deliLine[counter]}${sep}`
  }
  return resp.trim();
}