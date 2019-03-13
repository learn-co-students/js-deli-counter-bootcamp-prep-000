function takeANumber(queue, name){
  queue.push(name);
  return `Welcome, ${name}. You are number ${queue.length} in line.`;
}

function nowServing(queue){
  if(queue.length === 0) {
    return "There is nobody waiting to be served!";
  }else {
    let first = queue[0];
    queue.shift();
    return `Currently serving ${first}.`;
  }
}

function currentLine(queue){
  if(queue.length === 0){
    return "The line is currently empty.";
  }else{
    let string = `The line is currently: `
    for(let i = 0; i < queue.length; i++){
      string += `${i + 1}. ${queue[i]}, `;
    }
    string = string.slice(0, string.length - 2);
    return string;
  }
}