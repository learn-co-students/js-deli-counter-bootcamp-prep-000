function takeANumber(line, name) {
  line.push(name);
  return `Welcome, ${name}. You are number ${line.length} in line.`;
}

function nowServing(katzDeli) {
  if(katzDeli.length === 0) {
    return 'There is nobody waiting to be served!';
  }
  else{
    return `Currently serving ${katzDeli.shift()}.`;
  }
}