var katzDeli = [];

function takeANumber(katzDeliLine, costumerName) {
  let position = katzDeliLine.length + 1

  katzDeliLine.push(costumerName);
  return `Welcome, ${costumerName}. You are number ${position} in line.`
};

function nowServing(deliLine) {
  let i = 0
  let costumerNext = []

  if (0 < deliLine.length) {
    costumerNext.push(deliLine[0])
    deliLine.shift()
    return(`Currently serving ${costumerNext[0]}.`)
  } else if (0 >= deliLine.length) {
    katzDeli = []
    return 'There is nobody waiting to be served!'
  };
};

function currentLine(deliLine) {
  if (deliLine.length > 0) {
    let index = 0
    var currentlyInLine = [];

    for (let counter = 1; counter <= deliLine.length; counter++) {
      currentlyInLine.push(` ${counter}. ${deliLine[index]}`)
      index++
    }

    return `The line is currently:${currentlyInLine}`
  } else if (deliLine <= 0) {
    return 'The line is currently empty.'
  }
};
