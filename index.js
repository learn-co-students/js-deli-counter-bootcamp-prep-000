function takeANumber(katzDeliLine, firstName) {
  katzDeliLine.push(firstName);
  return `Welcome, ${firstName}. You are number ${katzDeliLine.length} in line.`
}

function nowServing(katzDeliLine) {
  if (katzDeliLine.length === 0) {
    return "There is nobody waiting to be served!";
  } else {
    var serving = katzDeliLine[0];
    katzDeliLine.shift();
    return `Currently serving ${serving}.`;
  }
}

function currentLine(katzDeliLine) {
  if (katzDeliLine.length === 0) {
    return "The line is currently empty."
  } else {
    let newArr = [];
    for (let i = 0; i < katzDeliLine.length; i++) {
      newArr.push(" " + (i + 1) + ". " + katzDeliLine[i])

    }
return `The line is currently:${newArr.join()}`;  }
}
