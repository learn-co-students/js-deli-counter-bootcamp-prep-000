var katzDeli = [];

function takeANumber(array, name) {
  array.push(name);
  for (let i = 0; i < array.length; i++) {
    if (array[i] === name) {
      return `Welcome, ${name}. You are number ${i + 1} in line.`;
    }
  }
}

function nowServing(array) {
  if (array[0] !== undefined) {
    return `Currently serving ${array.shift()}.`;
  } else {
    return 'There is nobody waiting to be served!'
  }
}

function currentLine(array) {
  if (array.length === 0) {
    return 'The line is currently empty.';
  }
  return `The line is currently: 1. ${array[0]}, 2. ${array[1]}, 3. ${array[2]}`
}
