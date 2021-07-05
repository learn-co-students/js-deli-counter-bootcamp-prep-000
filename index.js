var katzDeli = [];
function takeANumber(katzDeliLine, newCustomer) {
  katzDeliLine.push(`${newCustomer}`);
  return `Welcome, ${newCustomer}. You are number ${katzDeliLine.length} in line.`;
}

function nowServing(deliLine) {
  if (deliLine.length === 0) {
    return 'There is nobody waiting to be served!';
  } else {
    var firstInLine = deliLine.shift();
    return `Currently serving ${firstInLine}.`;
  }
}



function currentLine(katzDeli) {
  var line = [];
  let i = 0;
  while (i < katzDeli.length) {
    line.push(` ` + [i+1] + `. ` + katzDeli[i]);
    i++;
}
  if (katzDeli.length === 0) {
    return `The line is currently empty.` }
  else {
    return `The line is currently:` + line;
  }
}
