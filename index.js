function takeANumber(currentQue, newPerson) {
  currentQue.push(newPerson);
  return `Welcome, ${newPerson}. You are number ${currentQue.length} in line.`;
}

function nowServing(currentQue) {
  if (currentQue.length === 0) {
    return "There is nobody waiting to be served!"
  } else {
  return "Currently serving " + currentQue.shift() + ".";
  }
}

function currentLine(currentQue) {
  if (currentQue.length === 0) {
    return "The line is currently empty."
  } else {
  return currentQue.reduce((string, name, i) => {
    let n = i + 1;
    if (n === 1) {
      return string + ` ${n}. ${name}`
    } else {
    return string + `, ${n}. ${name}`
    }
  }, "The line is currently:");
  }
}
