var katzDeliLine = [];
function takeANumber (katzDeliLine,personName){
  katzDeliLine.push(personName);
  var current = katzDeliLine.length;
  console.log(current, "this is current")
  return `Welcome, ` + personName +`. You are number ` + current + ` in line.`;
}


// takeANumber(katzDeliLine,"girl");
// takeANumber(katzDeliLine,"person");
// console.log(katzDeliLine[1]);



function currentLine(line) {
  if (!line.length) {
    return "The line is currently empty."
  }

  const numbersAndNames = []

  for (let i = 0, l = line.length; i < l; i++) {
    numbersAndNames.push(`${i + 1}. ${line[i]}`)
  }

  /* Keep in mind, join() is a a shorthand for looping and building
   * into a String. */
  return `The line is currently: ${numbersAndNames.join(', ')}`
};

function nowServing(line) {
  if (!line.length) {
    return "There is nobody waiting to be served!"
  }

  return `Currently serving ${line.shift()}.`
};

