var katzDeli = []

function takeANumber (katzDeliLine, name) {
  katzDeliLine.push(name);
return (`Welcome, ${katzDeliLine[katzDeliLine.length-1]}. You are number ${katzDeliLine.length} in line.`);
}

function nowServing (katzDeliLine) {
  if (katzDeliLine.length === 0) {
   return (`There is nobody waiting to be served!`);
  } else {
    return (`Currently serving ${katzDeliLine.shift()}.`);
}
}

function currentLine (katzDeliLine) {
const x = katzDeliLine.length;
if (x === 0) {
   return (`The line is currently empty.`);

// This code was cheating
// } else if (katzDeliLine.length === 1){
//   return (`The line is currently: 1. ${katzDeliLine}.`)
// } else if (katzDeliLine.length === 2){
//   return (`The line is currently: 1. ${katzDeliLine[0]}, 2. ${katzDeliLine[1]}.`)
// } else {
//   return (`The line is currently: 1. ${katzDeliLine[0]}, 2. ${katzDeliLine[1]}, 3. ${katzDeliLine[2]}`)
//   }
// }

}
else {
let line = [];
  for (let i = 0; i < katzDeliLine.length; i++) {
    line.push(` ${i + 1}. ${katzDeliLine[i]}`);
  }
  return `The line is currently:${line}` ;
  }
}
