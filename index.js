var katzDeliLine = [];

function takeANumber(katzDeliLine, name){
  katzDeliLine.push(name);
  return `Welcome, ${name}. You are number ${katzDeliLine.length} in line.`;
}

function nowServing(katzDeliLine) {
  if(!katzDeliLine.length) {
    return "There is nobody waiting to be served!";
  }
  const person = katzDeliLine.shift()
  return `Currently serving ${person}.`;
}

function currentLine(katzDeliLine) {
  if(!katzDeliLine.length) {
    return "The line is currently empty.";
  }
  let nums = "The line is currently: ";
  for(let i=0;i<katzDeliLine.length;i++){
    nums += `${i===0? '':', '}${i+1}. ${katzDeliLine[i]}`
  }
  return nums;
}