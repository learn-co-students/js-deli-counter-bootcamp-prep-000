//Build a function that a new customer will use when entering the deli. The function, takeANumber, should accept the current line of people, katzDeliLine, along with the new person's name as parameters. The function should return their position in line. And don't go being too programmer-y and give them their index. These are normal people. If they are 7th in line, tell them that. Don't get their hopes up by telling them they are number 6 in line.

function takeANumber(katzDeliLine, name) {
  katzDeliLine.push(name)
  return `Welcome, ${name}. You are number ${katzDeliLine.length} in line.`
};

//Build a function nowServing. This function should return the first person in line and then remove that individual from the line. If there is nobody in line, it should return "There is nobody waiting to be served!"

function nowServing(katzDeliLine) {
  if (!katzDeliLine.length) {
    return "There is nobody waiting to be served!"
  }
  return `Currently serving ${katzDeliLine.shift()}.`
};


//Build a function currentLine that returns the current line. For example, if katzDeliLine is currently ["Ada", "Grace"], currentLine(katzDeliLine) would return "The line is currently: 1. Ada 2. Grace". If there is nobody in line, it should return "The line is currently empty."

function currentLine(katzDeliLine) {
  if (!katzDeliLine.length) {
    return "The line is currently empty."
  }

  var numbersAndNames = []

  for (let i = 0; i < katzDeliLine.length; i++) {
    numbersAndNames.push(`${i + 1}. ${katzDeliLine[i]}`)
  }
  return `The line is currently: ${numbersAndNames.join(", ")}`
};
