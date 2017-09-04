var katzDeli = [];

function takeANumber(array, person) {
  array.push(person)
  return `Welcome, ${ person }. You are number ${ array.length } in line.`
}

function nowServing(array) {
  if (array.length > 0) {
    return `Currently serving ${array.shift()}.`
  }
  else {
    return 'There is nobody waiting to be served!'
  }
}

function currentLine(array) {
  var string = 'The line is currently';
  if (array.length === 0 ) {
    string += ' empty.'
  } else {
    string += ': '
    for (var i = 0; i < array.length; i++) {
      string += (i+1) + ". " + array[i]
      if (i < array.length - 1) {
        string += ", "
      }
    }
  }
  return string
}
