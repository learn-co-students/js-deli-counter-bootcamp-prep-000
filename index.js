function takeANumber(deli, name){
  deli.push(name);
  return `Welcome, ${name}. You are number ${deli.length} in line.`;
}

function nowServing(deli){
  if (!deli.length) return 'There is nobody waiting to be served!';
  
  return `Currently serving ${deli.shift()}.`;
}

function currentLine(deli){
  if (!deli.length) return 'The line is currently empty.';
  
  let message = 'The line is currently: ';
  for (let i = 1; i <= deli.length; i++){
    message += `${i}. ${deli[i - 1]}, `
  }
  return message.slice(0, -2);
}