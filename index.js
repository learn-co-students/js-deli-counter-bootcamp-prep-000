// var katzDeli = []
// var otherDeli = ["Steven", "Blake", "Avi"]

function takeANumber(deli, newPerson) {
  (deli.push(newPerson));
    return (`Welcome, ${newPerson}. You are number ${deli.length} in line.`);
    // return katzDeli;
  }

function nowServing(deliLine) {
  //deliLine.shift
  if (deliLine.length === 0) {
    return ("There is nobody waiting to be served!");
  }
  else {
    return (`Currently serving ${deliLine.shift()}.`);
  }
}

function currentLine(line) {
  if (line.length === 0) {
    return ("The line is currently empty.");
  }
  else {
    var string = ('')
    for (var i = 0; i < line.length; i++) {
      var j = i + 1;
      var name = line[i];
        if (i === line.length - 1) {
            string = string + `${j}. ${name}`;
          //this is the last iteration
        }
        else {
            string = string + `${j}. ${name}, `;
        }
    }

    return `The line is currently: ${string}`;
  }
}
