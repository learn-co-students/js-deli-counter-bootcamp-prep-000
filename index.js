/* I like this version better, but it doesn't pass the test. >_<

function takeANumber(line, customer) {
  let ord = ['st','nd','rd']
  line.push(customer);
  let ll = line.length;
  return `Welcome, ${customer}! You are ${ll}${ll < 4 ? ord[ll - 1] : "th"} in line.`;
}

*/

function takeANumber(line, customer) {
  let ord = ['st','nd','rd']
  line.push(customer);
  let ll = line.length;
  return `Welcome, ${customer}. You are number ${ll} in line.`;
}

function nowServing(line) {
  if (line.length > 0) {
    return `Currently serving ${line.shift()}.`;
  } else {
    return 'There is nobody waiting to be served!';
  }
}

function currentLine(line) {
  if (line.length > 0) {
    let lineOrder = []
    for (let place = 0 ; place < line.length ; place++ ) {
      lineOrder.push(` ${place + 1}. ${line[place]}`)
    }
    return `The line is currently:${lineOrder}`
  } else {
    return "The line is currently empty.";
  }
}
