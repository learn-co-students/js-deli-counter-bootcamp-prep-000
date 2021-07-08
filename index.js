// Katz Deli
// Ryan Roat
// Jan 15 2018

let katzDeliLine = [];

function takeANumber (katzDeliLine, newCust) {
  let l = katzDeliLine.length;
  
  katzDeliLine[l] = newCust;
  l++
  return `Welcome, ${newCust}. You are number ${l} in line.`;
}

function nowServing (katzDeliLine) {
  if (katzDeliLine.length === 0) {
    return `There is nobody waiting to be served!`;
  }
  else {
    return `Currently serving ${katzDeliLine.shift()}.`;
  }
}

function currentLine (katzDeliLine) {
 let l = katzDeliLine.length;
 
 if (l === 0) {
   return `The line is currently empty.`;
 }
 
 let line = `The line is currently: `;
 
 for (let i = 0; i < l; i++) {
   line = line + `${i+1}. ${katzDeliLine[i]}`;
   if (i < (l - 1)) {
     line = line + `, `;
   }
 }
return line;
}