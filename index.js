function takeANumber(line, name) {
  line.push(name);
  return `Welcome, ${name}. You are number ${line.length} in line.`;
}

function nowServing(line){
//when no one is on line, line[0] doesn't exist and is undefined (false). But to run if(), condition has to be true/not false
//i.e. if it is true that line has no one in it =>
  if (!line[0]) {
    return `There is nobody waiting to be served!`;
  }
  else {
    //line.shift() (destr.)removes the first element from an array and returns that removed element
    return `Currently serving ${line.shift()}.`;
  }
}

function currentLine(line){
  if (!line[0]){
    return `The line is currently empty.`;
  }

  else {
    let numAndNames = [];
    for (let i = 0; i < line.length; i++) {
      numAndNames.push(` ${i + 1}. ${line[i]}`);
    }
    numAndNames.join(`,`)
    return `The line is currently:${numAndNames}`
  }
}
