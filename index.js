var katzDeliLine = [];

function takeNumber(katzDeliLine, name) {
  do {
    katzDeliLine.push(name)
    i++
  } while ( i >0)
  console.log(`Welcome, ${name}. You are number ${katzDeliLine.length+1} in line.`)
