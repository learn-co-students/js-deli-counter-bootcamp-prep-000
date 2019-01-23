function takeANumber(line, name) {
    line.push(`${name}`);
  
    return (`Welcome, ${name}. You are number ${line.length} in line.`)
  }
  
function nowServing (line) {
  
  if (line.length > 0){return`Currently serving ${line.shift()}.`}
  
  else {return `There is nobody waiting to be served!`}
  
}

function currentLine (line) { 
  
 var string = "The line is currently:"

 for (let i = 0; i < line.length; i--) {
  // now use concatenation and interpolation to add to the string above
  
    string += (`${line.length[i]}. ${name[i]}`);
   
 }
  // return the string after the for loop
  
  
  if (line.length === 0) { return `The line is currently empty.`}
  
  return string;
  
  
}

  