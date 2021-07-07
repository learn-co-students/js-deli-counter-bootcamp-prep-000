var katzDeliLine = [];

function takeANumber(katzDeliLine, name) {
  katzDeliLine.push(name);
  return (`Welcome, ${name}. You are number ${katzDeliLine.length} in line.`)
}

function nowServing(katzDeliLine) {
  if (katzDeliLine.length === 0) {
    return (`There is nobody waiting to be served!`)
  } else if (katzDeliLine.length > 0) {
      let firstPerson = katzDeliLine[0];
      katzDeliLine = katzDeliLine.shift();
      return (`Currently serving ${firstPerson}.`);
  }
}

function currentLine(katzDeliLine) {
  if (katzDeliLine.length > 0) {
    var str2 = [];
    for (let i = 1; i < katzDeliLine.length + 1; i++) {
      str2.push(` ${i}. ${katzDeliLine[i - 1]}`);
    }
    return (`The line is currently:${str2}`);
  } else if (katzDeliLine.length === 0) {
    return (`The line is currently empty.`)
  }
}