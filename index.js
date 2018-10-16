function takeANumber(queue, name) {
  queue.push(name);
  let i = queue.length;
  return `Welcome, ${name}. You are number ${i} in line.`;
}


function nowServing(queue) {
  var upNow = queue[0];
  
  if(queue.length > 0) {
    queue.shift();
  } else if(upNow === undefined) {
    return "There is nobody waiting to be served!";
  }
  
  return `Currently serving ${upNow}.`;
}


function currentLine(queue) {
  var inLine = [];
  var n = 0;
  
  if(queue.length > 0) {
    for(var i = 1; i <= queue.length; i++) {
      inLine.push(` ${i}. ${queue[n]}`);
      n++;
    }
    return `The line is currently:${inLine}`;
  } else {
    return "The line is currently empty.";
  }
}
