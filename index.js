//takeANumber
function takeANumber(current, newName){
  current.push(newName);
  let position = current.length
  return `Welcome, ${newName}. You are number ${position} in line.`;
}

//nowServing
function nowServing(current){
  if (current.length === 0){
    return 'There is nobody waiting to be served!'
  }
  let name = current[0];
  current.shift();
  return `Currently serving ${name}.`;
}

//currentLine
function currentLine(current){
  if (current.length === 0){
    return 'The line is currently empty.'
  }
  let message = 'The line is currently:';
  for (let i=0;i<current.length-1;i++){
    message = message+` ${i+1}. ${current[i]},`
  }
  message = message+` ${current.length}. ${current[current.length-1]}`
  return message;
}



