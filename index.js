function takeANumber (katzDeliLine,name) {
  var n = parseInt(katzDeliLine.length + 1)
  katzDeliLine.push(name)
  return (`Welcome, ${name}. You are number ${n} in line.`)
}