function takeANumber(cur, name){
  cur.push(name);
  return `Welcome, ${name}. You are number ${cur.length} in line.`;
}

function nowServing(katzDeliLine){
  if (katzDeliLine.length === 0) return "There is nobody waiting to be served!";
  return `Currently serving ${katzDeliLine.shift()}.`;
}

function currentLine(katzDeliLine){
  if (katzDeliLine.length === 0) return "The line is currently empty.";
  let ret = "The line is currently: ";
  for (let i=0; i<katzDeliLine.length; i++) ret += `${i+1}. ${katzDeliLine[i]}, `;
  return ret.substring(0, ret.length - 2);
}