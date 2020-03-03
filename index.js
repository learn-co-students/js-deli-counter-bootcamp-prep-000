// I haven't saw a deli counter for real. It took me 2 days to understand it.
//I didn't like my messy code. Re-committed being inspired by the solution.


// task1
function takeANumber(katzDeliLine, name) {
  katzDeliLine.push(name)

  return `Welcome, ${name}. You are number ${katzDeliLine.length} in line.`
};
//task2
function nowServing(katzDeliLine) {
  if (!katzDeliLine.length) {
    return "There is nobody waiting to be served!"
  }

  return `Currently serving ${katzDeliLine.shift()}.`
};

//task3
function currentLine(katzDeliLine) {
  if (!katzDeliLine.length) {
    return "The line is currently empty."
  }

  const  katzDeli = [];

  for (let i = 0, l = katzDeliLine.length; i < l; i++) {
    katzDeli.push(`${i + 1}. ${katzDeliLine[i]}`)
  }

  return `The line is currently: ${katzDeli.join(', ')}`
};
