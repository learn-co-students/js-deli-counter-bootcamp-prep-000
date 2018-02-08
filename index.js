function takeANumber (katzDeliLine, name) {
  katzDeliLine.push(name);
  return `Welcome, ${name}. You are number ${katzDeliLine.length} in line.`;
}

function nowServing (katzDeliLine, name) {
  if (katzDeliLine>0) {
    katzDeliLine.shift(name);
    return `Currently serving ${name}`;
  } else {
    return `There is nobody waiting to be served!`;
  }
}