var katzDeli = [];

function takeANumber(katzDeliLine, name) {
  katzDeliLine.push(name);
  return `Welcome ${name}, you are number ${katzDeliLine.length} in line.`;
}