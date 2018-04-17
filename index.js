function takeANumber(line, person) {
  var nextNumber = line.length + 1;
  line.push(person);
  return `Welcome, ${person}. You are number ${nextNumber} in line.`;
}

function nowServing(line) {
  if(line.length === 0) {
    return "There is nobody waiting to be served!";
  }
  
  return `Currently serving ${line.shift(1)}.`
}

function currentLine(line) {
  var intro = "The line is currently";
  
  if(line.length === 0) {
    return `${intro} empty.`;
  }
  
  var output = ""
  for(var i = 0; i < line.length; i++) {
    if(output.length > 0)
    {
      output += ","
    }
    
    output += ` ${i+1}. ${line[i]}`
  }
  
  return `${intro}:${output}`;
}