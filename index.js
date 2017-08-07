function currentLine(line){
  //check if current line is empty
  if(!line.length){
    return "The line is currently empty."
  }
// names and numers array to be worked with
  var namesAndNumbers = [];

  for (var i = 0, people = line.length; i < people; i++){
    namesAndNumbers.push(`${i + 1}. ${line[i]}`);
  }
  return `The line is currently: ${namesAndNumbers.join(', ')}`
}

function nowServing(line){
  if(!line.length){
    return "There is nobody waiting to be served!";
  }
  return `Currently serving ${line.shift()}.`;
}

function takeANumber(line, name){
  line.push(name);
  return `Welcome, ${name}. You are number ${line.length} in line.`;
}
