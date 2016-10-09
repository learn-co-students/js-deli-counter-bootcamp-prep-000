var katzDeli = [];

function takeANumber(array, name) {
  array.push(name);
  return `Welcome, ${name}. You are number ${array.indexOf(name) + 1} in line.`
}

function nowServing(array) {
  if (array[0] === undefined) {

    return "There is nobody waiting to be served!";
  } else {
    var first = array[0];
    array.shift();

    return `Currently serving ${first}.`;
  }

}


function currentLine(array) {
  if (array.length > 0) {
    var line = [];
    for (var i = 0; i < array.length; i++) {

      line.push( `${i + 1}. ${array[i]}`);
    }

    var sentence = line.join(", ");
    var solution = `The line is currently: ${sentence}`;
    return solution;
    //This isn't the ideal way to do this. It seems like too many variables to me, but when i put the interpolation
    //directly in the return, it fails to fire. I'm a little lost as to why, but this solution works.

  } else {
    return "The line is currently empty."
  }
}
