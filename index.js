var katzDeli = [];

function takeANumber(katzDeliLine, name){
  katzDeliLine.push(name);
  return `Welcome, ${name}. You are number ${katzDeliLine.length} in line.`
}
function nowServing(name) {
  if (name.length === 0){
    return "There is nobody waiting to be served!"
  }
  return `Currently serving ${name.shift()}.`
}
function currentLine(name){
  if (name.length === 0){
    return "The line is currently empty.";
  }
  let numberLine = [];
  for (let i = 0; i < name.length; i++){
  numberLine.push(`${i + 1}. ${name[i]}`)  
  }
  return `The line is currently: `+ numberLine.join(', ');
}