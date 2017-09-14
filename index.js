var katzDeli = [];

function takeANumber(katzDeliLine, newName) {
  katzDeliLine.push(newName)
  return `Welcome, ${newName}. You are number ${katzDeliLine.length} in line.`
}

function nowServing(line) {
  // line would equal = [] if it's empty
  if(line.length === 0){
    return 'There is nobody waiting to be served!';
  } else {
    // returns an announcement about the person it is serving, and shifts the line
    // what do we store values in?
    var name = line[0]
    // line is equal to ['john', 'bob']
    line.shift()
    // line is now equal to ['bob']
    // name is still equal to 'john'
    return `Currently serving ${name}.`
  }
}

function currentLine(line) {
  if (line.length > 0){
    var newLine = [];
    for (var i = 0; i < line.length; i++) {
      // first loop i is 0
      // line[i] is 'Bill'
      // '1. Bill'
      newLine.push(`${i + 1}. ${line[i]}`);
    }
    return `The line is currently: ${newLine.join(', ')}`;
  } else {
    return ("The line is currently empty.")
  }
  return newLine;
}
