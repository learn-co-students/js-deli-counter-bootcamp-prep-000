function takeANumber(current, name) {
  current.push(name);
  return `Welcome, ${name}. You are number ${current.length} in line.`;
  }
 
 function nowServing(current) {
   if(current.length === 0) {
     return `There is nobody waiting to be served!`;
   }
   
   return `Currently serving ${current.shift()}.`;
 }
 
 function currentLine(current) {
   if(current.length === 0) {
     return `The line is currently empty.`;
   }
   const deliLine = [ ];
   
   for (let i = 0, l = current.length; i < l; i++) {
    deliLine.push(`${i + 1}. ${current[i]}`);
  }
   return `The line is currently: ${deliLine.join(`, `)}`; 
 }
 