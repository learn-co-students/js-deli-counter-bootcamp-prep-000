function takeANumber(line, name) {
  line.push(name);
  return `Welcome, ${name}. You are number ${line.length} in line.`
}

function nowServing(line) {
  if (line.length === 0) {
     return "There is nobody waiting to be served!"
  }
  return `Currently serving ${line.shift()}.`

}

//"The line is currently: 1. Ada, 2. Grace"
function currentLine(line) {
  
  if(line.length === 0) {
    return "The line is currently empty.";
  }
  
  let resultStr = "The line is currently: ";
  
  for(let i=0; i < line.length; i++) {
   let person = line[i];
    
    if(i > 0) {
      resultStr += ", ";
    }
    
    resultStr += `${i + 1}. ${person}`;
  }
  
  return resultStr;
}