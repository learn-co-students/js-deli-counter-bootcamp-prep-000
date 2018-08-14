function takeANumber(theLine,newPerson) {
 theLine.push(newPerson);
 return `Welcome, ${newPerson}. You are number ${theLine.length} in line.`;
}

//so you're adding a person to the array of people in line, and the # in the line is just the length of the line, which changes every time you add a person

function nowServing(theLine) {
  if (theLine.length !== 0) {
   return `Currently serving ${theLine.splice(0,1)}.`;
  } else return 'There is nobody waiting to be served!';
  theLine = theLine.slice(1);
}

//if there's people in line, you want to splice off the first index, and just the 1 name. If there's no one in line, you have the message. Then, you're resetting the parameter so that it starts with the 2nd person in line.

function currentLine(theLine) {
  if (theLine.length === 0) {
    return "The line is currently empty.";
  } else {
    var oneMoreLine = [];
    for (let i=0; i < theLine.length; i++) {
      oneMoreLine.push(` ${i+1}. ${theLine[i]}`);
    }
      oneMoreLine = oneMoreLine.slice(0,3);
      return 'The line is currently:' + oneMoreLine;
  }
}

//First part is simple, no people then display the message. Then you're making a new variable to get passed. the for loop adds to the new variable the number and name, then you do the slice to get the first 3 names to the list 