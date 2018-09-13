function takeANumber(line, person) {
  line[line.length] = person
  var insert = line.length
  return 'Welcome, ' + person + '. You are number ' + insert + ' in line.'
}

function nowServing(line) {
  if (line.length === 0) {
    return 'There is nobody waiting to be served!'
  } else {
    var insert = line[0]
    line.shift()
    return 'Currently serving ' + insert + '.'
  }
}

function currentLine(line) {
  if (line.length === 0) {
    return 'The line is currently empty.'
  } else {
      var insert = function() {
        var array = []
        for (var i = 0; i < line.length; i++) {
          var insertTwo = i + 1
          if (array.length === 0) {
            array.push(insertTwo + '. ' + line[i])
          } else
          array.push(' ' + insertTwo + '. ' + line[i])
        }
        return array
      }
    return 'The line is currently: ' + insert()
  }
}
