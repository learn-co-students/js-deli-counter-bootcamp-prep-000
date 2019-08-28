let katzDeli = [];

function takeANumber(katzDeli, name) {
  katzDeli.push(name);
  return `Welcome, ${name}. You are number ${katzDeli.length} in line.`;
}

function nowServing(katzDeli) {
  if (katzDeli.length > 0) {
    let report = `Currently serving ${katzDeli[0]}.`;
    katzDeli.shift();
    return report;
  }
  else {
    return "There is nobody waiting to be served!";
  }
}

function currentLine(katzDeli) {
  if (katzDeli.length === 0) {
    return "The line is currently empty."
  }
  var customerAndNumber = [];
  for (var i=0; i<katzDeli.length; i++) {
    customerAndNumber.push(i+1 + ". " + katzDeli[i])
  }
  return "The line is currently: " + customerAndNumber.join(", ");
}
