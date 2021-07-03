var katzDeli = [];

function takeANumber(katzDeliLine, newName) {
  katzDeliLine.push(newName)
  let counter = katzDeliLine.length;
  return 'Welcome, ' + newName + '. You are number ' + counter + ' in line.'
}

function nowServing(katzDeliLine) {

  while (katzDeliLine.length > 0) {
    return "Currently serving " + katzDeliLine.shift(0) + "."
  } if (katzDeliLine.length <= 0) {
    return 'There is nobody waiting to be served!'
  }
}

function currentLine(katzDeliLine) {
  let counter = 0
  if (counter <= katzDeliLine.length - 1) {
    while (counter <= katzDeliLine.length - 1) {
      if (counter === 0) {
        katzDeliLine[counter] = (counter + 1) + '. ' + katzDeliLine[counter];
        counter++;
      } else {
      katzDeliLine[counter] = ' ' + (counter + 1) + '. ' + katzDeliLine[counter];
        counter++;
      }
    } return 'The line is currently: ' + katzDeliLine;
  } else {
    return "The line is currently empty."
  }
}