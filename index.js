function takeANumber(n, name){
  n.push(name);
  return `Welcome, ${name}. You are number ${n.length} in line.`;
}

function nowServing(line){
  return line.length === 0 ? 'There is nobody waiting to be served!' : `Currently serving ${line.shift()}.`;
}

function currentLine(line){
  var hjh = []
  for(var i=0; i< line.length; i++){
   hjh.push(`${i+1}. ${line[i]}`);

  }
  return line.length === 0 ? "The line is currently empty." : `The line is currently: ${hjh.join(", ")}`;
}