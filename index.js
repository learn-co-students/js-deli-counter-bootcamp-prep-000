//At the beginning of the day, the deli is empty and is represented by an empty array:

var katzDeli = [];

function takeANumber (katzDeliLine, name) {
 katzDeliLine.push(name);
  return (`Welcome, ${name}. You are number ${katzDeliLine.length} in line.`);
}

function nowServing (katzDeliLine) {
  if (katzDeliLine.length === 0) {
    return ("There is nobody waiting to be served!");
  } else {
    var nextCustomer = (`Currently serving ${katzDeliLine.shift(0)}.`);
  }
  return nextCustomer;
}

function currentLine (katzDeliLine) {
  if (katzDeliLine.length === 0) {
    return ("The line is currently empty.")
  } else {
      return (`The line is currently: 1. ${katzDeliLine[0]}, 2. ${katzDeliLine[1]}, 3. ${katzDeliLine[2]}`);
  }
}