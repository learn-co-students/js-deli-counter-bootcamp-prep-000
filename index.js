function takeANumber(line, name) {
    line.push(`${name}`);
  
    return (`Welcome, ${name}. You are number ${line.length} in line.`)
  }
  
function nowServing (line) {
  
  if (line.length > 0){return`Currently serving ${line.shift()}.`}
  
  else {return `There is nobody waiting to be served!`}
  
}

function currentLine (line) { 
  
 var string = "The line is currently: "

 for (let i = 0; i < line.length; i++) {
  
    string += (`${[i+1]}. ${line[i]}, `);
   
 }

  if (line.length === 0) { return `The line is currently empty.`}
  
  return string.slice(0,-2);
  
  
}

  