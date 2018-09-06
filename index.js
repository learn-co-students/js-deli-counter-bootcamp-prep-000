function takeANumber(line,newPerson) {
 line.push(newPerson);
 return `Welcome, ${newPerson}. You are number ${line.length} in line.`;
}

//so you're adding a person to the array of people in line, and the # in the line is just the length of the line, which changes every time you add a person.

function nowServing(line) {
  if (line.length === 0) {
    return 'There is nobody waiting to be served!';
  }
  else {
    return `Currently serving ${line.shift()}.`
  }
}


//if there's no one in line, return the expected string. Else, remove the first person in line with shift and return that string. The line is mutated with the shfit method.

function currentLine(line) {
  if (line.length === 0) {
    return 'The line is currently empty.'
  }
  else {
    let lineAddition = [];
    for (let i = 0; i < line.length; i++){
      lineAddition.push(` ${i+1}. ${line[i]}`);
    }
    return 'The line is currently:' + lineAddition;
  }
}

//If there's no one in line, return the expected string. Then you're making a new array to hold the line. the for loop adds to the new variable the number and name. When you add the array to the string, it is coerced into a string.