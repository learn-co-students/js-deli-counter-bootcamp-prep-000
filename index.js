// function takeANumber(katzDeliLine, newPersonsName) {
//   katzDeliLine.push(newPersonsName);
//
//   return `Welcome, ${newPersonsName}. You are number ${katzDeliLine.length} in line.`;
// }
//
// function nowServing(deliLine) {
//   if (deliLine.length === 0) {
//     return 'There is nobody waiting to be served!';
//   } else {
//     var currentCustomer = deliLine.shift();
//
//     return `Currently serving ${currentCustomer}.`;
//   }
// }
//
// function currentLine(line) {
//   if (line.length === 0) {
//     return 'The line is currently empty.';
//   } else {
//     var newLine = [];
//
//     for (var i = 0; i < line.length; i++) {
//       newLine.push(`${i + 1}. ${line[i]}`)
//     }
//
//     return `The line is currently: ${newLine.join(', ')}`
//   }
// }

function takeANumber(katzDeliLine, name) {
  katzDeliLine.push(name);

  return `Welcome, ${name}. You are number ${katzDeliLine.length} in line.`;
}

function nowServing(katzDeliLine) {
  if (katzDeliLine.length === 0) return 'There is nobody waiting to be served!';

  return `Currently serving ${katzDeliLine.shift()}.`;
}

function currentLine(katzDeliLine) {
  if (katzDeliLine.length === 0) return 'The line is currently empty.';

  var currentLine = [];

  for (var i = 0; i < katzDeliLine.length; i++) {
    currentLine.push(`${i + 1}. ${katzDeliLine[i]}`);
  }

  return `The line is currently: ${currentLine.join(', ')}`
}
