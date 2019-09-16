function currentLine(line) {
  if (!line.length) {
    return "The line is currently empty."
  }

  var numbersAndNames = []

  for (let i = 0, l = line.length; i < l; i++) {

    numbersAndNames.push(`${i + 1}. ${line[i]}`)
  }

  return `The line is currently: ${numbersAndNames.join(', ')}`
};

function nowServing(line) {
  if (!line.length) {
    return "There is nobody waiting to be served!"
  }
// ! is single bang, making a statement false, even if true
// !! if a statement is true, stays true with the double bang.
  return `Currently serving ${line.shift()}.`
  };

function takeANumber(line, name) {
  line.push(name)

  return `Welcome, ${name}. You are number ${line.length} in line.`
};
