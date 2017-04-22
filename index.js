function takeANumber(line, person){
  //adds a person to the line
  //appends the person the end of the line if there are already people on it
  //properly handles multiple people being added
  line.push(person);
  return `Welcome, ${person}. You are number ${line.length} in line.`
}

function nowServing(line){
//returns an announcement about the person it is serving,
//and shifts the line
// returns the line is empty when no on is on line
  if (line.length > 0) {
    return `Currently serving ${line.shift()}.`
    /*var currentlyServing = line[0];
    line.shift();
    return `Currently serving ${currentlyServing}.`;*/
  }
  else
    return 'There is nobody waiting to be served!';
}

function currentLine(line){
  //returns "The line is currently empty." if no one is in line
  //says who is in line when there are people waiting
  if (line.length === 0)
    return `The line is currently empty.`;

  else {
    const whosInLine = [];
    for (let i = 0; i < line.length; i++)
      whosInLine.push(`${i===0 ? '' : ' '}${i+1}. ${line[i]}`);
    return `The line is currently: ${whosInLine}`;
  }
}
