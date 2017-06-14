var katzDeli = [];

function takeANumber(katzDeliLine, person) {
  for (var i = 0; i < katzDeliLine.length; i++) {
    katzDeli[i] = katzDeliLine[i]
    return `Welcome, ${person}. You are number ${i} in line.`
  }
}
