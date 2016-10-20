var katzDeli = []
function takeANumber(katzDeliLine, name) {
  for (var i = 0; i < katzDeliLine.length; i++) {
    if (i ===1) {
      katzDeli.push(`Welcome ${name}. You are number 1 in line`)
    } else {
      katzDeli.push(`Welcome ${name}. You are number ${i} in line`)
      }
    }
  return katzDeli
}







{
  for (var i = 0; i < katzDeliLine.length; i++) {
    if (i === 1)
    katzDeli.push(`Welcome ${name}. You are number 1 in line`)
    } else {
    katzDeliLine.push(`Welcome ${name}. You are number ${i} in line`)
  }
  return katzDeli
}
