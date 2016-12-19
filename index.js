let katzDeli = [];

function takeANumber(katzDeli, name) {
  katzDeli.push(name);
  for (let i = 0; i < katzDeli.length; i++) {
    if (katzDeli[i] == name) {
      return `Welcome, ${name}. You are number ${i + 1} in line.`
    }
  }
}

function nowServing(katzDeli) {
  if (katzDeli.length > 0) {
    return `Currently serving ${katzDeli.shift()}.`;
  } else {
    return "There is nobody waiting to be served!"
  }
}

function currentLine(katzDeli) {
  let message = "The line is currently: ";
  if (katzDeli.length > 0 ) {
    for (let i = 0; i < katzDeli.length; i++) {
      message += `${i + 1}. ${katzDeli[i]}, `;
    }
    return message.slice(0, message.length - 2);
  } else {
    return "The line is currently empty."
  }
}
