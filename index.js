
function takeANumber (arr, name) {
  arr.push(name);
  return "Welcome, " + name + ". You are number " + arr.length + " in line.";
}

function nowServing (arr) {
  if (arr.length === 0) {
    return "There is nobody waiting to be served!";
  }
  return "Currently serving " + arr.shift() + ".";
}

function currentLine (arr) {
  if (arr.length === 0) {
    return "The line is currently empty."
  }
  return 'The line is currently: 1. ' + arr[0] + ', 2. ' + arr[1] + ', 3. ' + arr[2];
}

/*

function currentLine(line) {
  if (!line.length) {
    return "The line is currently empty."
  }

  const numbersAndNames = []

  for (let i = 0, l = line.length; i < l; i++) {
    numbersAndNames.push(`${i + 1}. ${line[i]}`)
  }

  return `The line is currently: ${numbersAndNames.join(', ')}`
};

function nowServing(line) {
  if (!line.length) {
    return "There is nobody waiting to be served!"
  }

  return `Currently serving ${line.shift()}.`
};

function takeANumber(line, name) {
  line.push(name)

  return `Welcome, ${name}. You are number ${line.length} in line.`
};
*/
