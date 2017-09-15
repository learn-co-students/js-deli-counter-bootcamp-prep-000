  // Accept current line of people with name as parameter
function takeANumber(currentList, newPerson) {
  // Function returns position in line
  var position = currentList.length + 1;
  currentList.push(newPerson);
  return `Welcome, ${newPerson}. You are number ${position} in line.`;
  // Ensure position is not index
}

function nowServing(currentList) {
    // Returns first person in line
  if (currentList.length > 0) {
    var firstPerson = currentList[0];
    // Removes same individual from line. currentList.shift();
    currentList.shift();
    return `Currently serving ${firstPerson}.`;

    // IF line is empty, returns 'There is nobody waiting to be served!'
  } else {
      return 'There is nobody waiting to be served!';
    }
}

function currentLine(line) {
  // If no one is in line, returns 'The line is currently empty.'
  if(line.length === 0) {
    return 'The line is currently empty.';
  } else {
    var i = 0;
    var newArray = [];
    while(i < line.length) {
      var position = i + 1;
      var fullThing = ' ' + position + '. ' + line[i];
      newArray.push(fullThing);
      i++;
    }
    // Returns current line
    return 'The line is currently:' + newArray;
  }
  // String = 'The line is current: ${[number + 1], ${number + 1}}'
}
