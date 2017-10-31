function takeANumber(customerLine, name) {
  return `Welcome, ${name}. You are number ${customerLine.push(name)} in line.`;
}

function nowServing(customerLine) {
  return customerLine[0] === undefined ? 'There is nobody waiting to be served!' : `Currently serving ${customerLine.shift()}.`;
}

function currentLine(customerLine) {
  var lineDescription = 'The line is currently';

  if (customerLine[0] === undefined) {
    lineDescription += ' empty.';
  }
  else {
    lineDescription += ':'
    for (var name, i = 1; undefined !== (name = customerLine.shift()); i++){
      lineDescription += `${i > 1 ? ',' : ''} ${i}. ${name}`;
    }
  }

  return lineDescription;
}
