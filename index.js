var katzDeli = [];

function takeANumber(katzDeliLine, name) {
  katzDeliLine.push(name);
  return `Welcome, ${name}. You are number ${katzDeliLine.indexOf(name)+1} in line.`
}

function nowServing(katzDeliLine) {
  if (katzDeliLine.length === 0) {
    return "There is nobody waiting to be served!";
  } else {
    var current = katzDeliLine.shift();
    return `Currently serving ${current}.`;
  }
}

function currentLine(katzDeliLine) {
  if (katzDeliLine.length === 0) {
    return "The line is currently empty.";
  } else {
    var statement = "The line is currently: ";
    var i = 0;
    for (i; i < katzDeliLine.length; i = i+1) {
      statement = statement + `${i+1}. ${katzDeliLine[i]}, `;
    }
    statement = statement.slice(0, -2);
    return statement;
  }
}