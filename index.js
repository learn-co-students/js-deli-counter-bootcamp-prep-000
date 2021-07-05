function takeANumber(katzDeli,name){
  katzDeli.push(`${name}`);
  return(`Welcome, ${name}. You are number ${katzDeli.length} in line.`);
}

function nowServing(katzDeliLine){
 if(katzDeliLine.length === 0){
   return `There is nobody waiting to be served!`;
 }  else {
   let result = katzDeliLine[0];
   katzDeliLine.shift();
  return `Currently serving ${result}.`;
 }
} 


function currentLine(line) {
  if (line.length === 0) {
    return `The line is currently empty.`;
  } else {
    let array = [];
    for (let i = 0; i < line.length; i++) {
      array.push(` ${i+1}. ${line[i]}`);
    }
    return `The line is currently:` + array;
  }
}
