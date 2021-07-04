function takeANumber(n, name) {
  n.push(name)
  return `Welcome, ${name}. You are number ${n.length} in line.`;
}

function nowServing(current) {
  if(current.length === 0) {
    return "There is nobody waiting to be served!";
  }
  let nowServing = "";
  nowServing = current[0];
  current.shift();
  return `Currently serving ${nowServing}.`;
}

function currentLine(current) {
  if(current.length === 0) {
    return "The line is currently empty.";
  }
  let message = "The line is currently: ";
  for(let i=0; i<current.length; i++) {
    if(i === current.length - 1) {
     message += `${i+1}. ${current[i]}`;
     return message;
    }
    message += `${i+1}. ${current[i]}, `;
  }
  return message;
}