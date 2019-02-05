var katzDeLine = [];

function takeANumber(line, name) {
  line.push(name);
  return `Welcome, ${name}. You are number ${line.length} in line.`;
  }

  let num = 0;
  function takeANumberTwo (line, name) {
  
    line.push(name);
    num++; 
    return `Welcome, ${name}. You are number ${num} in line`;
 
  }
    
  function nowServing(line) {
    if( line.length > 0 ) {
      return `Currently serving ${line.shift()}.`;
    }
    else return `There is nobody waiting to be served!`;
  }
  
  function currentLine(line) { 
    let string = [];
     for( let i=0; i< line.length; i++) {
      string.push(` ` + [i+1] + ". " + line[i])}
   if (line.length > 0) {
      return `The line is currently: ${string}`; 
       }
    else return `The line is currently empty.`;
     
  }
