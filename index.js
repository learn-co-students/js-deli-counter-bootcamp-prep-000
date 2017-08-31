function takeANumber(line, customer) {
  line.push(customer);
  return `Welcome, ${customer}. You are number ${line.length} in line.`;
}

function nowServing(line) {
  if (line.length > 0) {
    var current = line.shift();
    return `Currently serving ${current}.`
  } else {
  return "There is nobody waiting to be served!"
  }
}



function currentLine(line) {
  var linecount = [];

  if (line.length === 0) {
    return "The line is currently empty."
  }

  for (var i = 0; i < line.length; i ++) {
    linecount.push(`${i+1}. ${line[i]}`)
  }

  return `The line is currently: ${linecount.join(", ")}`
}
