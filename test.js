function currentLine(array) {
  if (array.length > 0) {
    var line = [];
    for (var i = 0; i < array.length; i++) {

      line.push( `${i + 1}. ${array[i]}`);
    }

    var sentence = line.join(", ");
    var solution = `The line is currently: ${sentence}`;
    return solution;


  } else {
    return "The line is currently empty."
  }
}

var theCurrentLine = [];

console.log(currentLine(theCurrentLine));
