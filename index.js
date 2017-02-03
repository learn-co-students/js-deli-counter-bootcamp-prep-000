function takeANumber(katzDeliLine, name) {
    katzDeliLine.push(name);
    return `Welcome, ${name}. You are number ${katzDeliLine.length} in line.`;
}

function nowServing(katzDeliLine) {

    if (katzDeliLine.length > 0) {
      // return the first person in line
      // remove that person from the line
      var current = katzDeliLine.shift();
      return `Currently serving ${current}.`;
    } else {
      // if no one in line, return "There is nobody waiting to be served!"
      return 'There is nobody waiting to be served!';
    }

}

function currentLine(line) {
  if (line.length > 0) {

    var string = 'The line is currently:';
    var array = [];

    for (var i = 0; i < line.length; i++) {
      array.push(' ' + (i + 1) + '. ' + line[i]);
    }

    return string + array;

  } else {
    return 'The line is currently empty.';
  }

}
