var katzDeliLine = [];

function takeANumber (katzDeliLine, name) {
  katzDeliLine.push(name);
  return `Welcome, ${name}. You are number ${katzDeliLine.length} in line.`;
}

function nowServing (katzDeliLine) {
  if (katzDeliLine.length > 0) {
  return `Currently serving ${katzDeliLine.shift()}.`;
} else {
  return 'There is nobody waiting to be served!';
}
}

function currentLine (katzDeliLine) {
  var array = [];
  for (var i = 0; i < katzDeliLine.length; i++) {
    if (i === 0) {
      array.push(`${i + 1}. ${katzDeliLine[i]}`);
  } else {
      array.push(` ${i + 1}. ${katzDeliLine[i]}`);
  }
}
  if (katzDeliLine.length > 0) {
  return `The line is currently: ${array}`;
} else {
  return 'The line is currently empty.';
  }
}
