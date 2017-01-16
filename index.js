var katzDeli = [];

function takeANumber(arr, person) {
  arr.push(person)
  return `Welcome, ${person}. You are number ${arr.length} in line.`
}

function nowServing(line) {
  if (!line.length) {
    return "There is nobody waiting to be served!"
  }

  return `Currently serving ${line.shift()}.`
};

function currentLine(arr) {
  var newArray = []
  if ( arr.length === 0) {
    return 'The line is currently empty.'
  } for (var i = 0; i < arr.length; i++) {
    newArray.push(` ${i + 1}. ` + arr[i])
  }
      return `The line is currently:${newArray}`
}
