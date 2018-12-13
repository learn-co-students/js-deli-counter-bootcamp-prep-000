
function takeANumber(katzDeliLine, name) {
  for (var counter = 0; counter < katzDeliLine.length; counter++) {
    katzDeliLine.push(`Welcome, ${name}. Your are number ${katzDeliLine[counter] + 1} in line.`);
  }
  return katzDeliLine;
}
