function takeANumber(katzDeli, customer) {
  katzDeli.push(customer)
  return `Welcome, ${customer}. You are number ${katzDeli.length} in line.`
}

function nowServing(katzDeli) {
  if (katzDeli.length === 0) {
    return "There is nobody waiting to be served!"
  }

  var msg = `Currently serving ${katzDeli[0]}.`
  katzDeli.splice(0, 1);
  return msg
}

function currentLine(katzDeli) {
  if (katzDeli.length === 0) {
    return "The line is currently empty."
  }

  var msg = "The line is currently: ";

  for (var i = 0; i < katzDeli.length; i++) {
    if (i === katzDeli.length - 1) {
      msg += (i + 1) + ". " + katzDeli[i]
    } else {
      msg += (i + 1) + ". " + katzDeli[i] + ", "
    }
  }

  return msg
}
