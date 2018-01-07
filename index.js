function takeANumber(katzDeliLine, name) {
  katzDeliLine.push(name);
  return `Welcome, ${name}. You are number ${katzDeliLine.length} in line.`
  // for (let i = 0; i < katzDeliLine; i++) {
  //   if (katzDeliLine[i] === name)
  //   return i+1;
  // }
}

function nowServing(katzDeliLine) {
  if (katzDeliLine.length === 0) {
    return "There is nobody waiting to be served!";
  } else {
    let person = katzDeliLine.shift();
    return "Currently serving " + person + ".";
  }
}

function currentLine(katzDeliLine) {
  if (katzDeliLine.length === 0) {
    return "The line is currently empty.";
  } else {
    let word = "The line is currently:";
    for (let i = 0; i < katzDeliLine.length; i++) {
      word += ` ${i+1}. ${katzDeliLine[i]},`;
    }
    return word.slice(0, word.length - 1);
  }
}