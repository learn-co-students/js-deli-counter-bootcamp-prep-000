function takeANumber(deliLine, newCustomer) {
  deliLine.push(newCustomer);
  return "Welcome, " + newCustomer + ". You are number " + (deliLine.length) + " in line.";
}

function nowServing(katzDeliLine) {
  if (katzDeliLine.length === 0) {
    return "There is nobody waiting to be served!";
  } else {
    return "Currently serving " + katzDeliLine.shift() + "."
  }
}


function currentLine(deliLine) {
  if (deliLine.length === 0) {
    return "The line is currently empty.";
  } else {
    var list = []
    for (let i = 0 ; i < deliLine.length ; i++) {
      list.push((i + 1) + ". " + deliLine[i]);
    }
    return "The line is currently: " + list.join(", ");
  }
}