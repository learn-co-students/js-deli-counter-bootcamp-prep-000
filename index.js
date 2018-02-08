function takeANumber (katzDeliLine, name) {
  return `Welcome, ${name}. You are number ${katzDeliLine.length+1} in line.`;
}

function nowServing (katzDeliLine, name) {
  if (katzDeliLine>0) {
    return `Currently serving ${name}`;
  } else {
    return `There is nobody waiting to be served!`;
  }
}