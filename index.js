function takeANumber(currQueue, name) {
  // return "Welcome, " + name + "." + " You are number 1 in line."
  console.log(currQueue);
  currQueue.push(name);
  return `Welcome, ${name}. You are number ${currQueue.length} in line.`
}

function nowServing(queue) {
  if (queue.length === 0) {
    return "There is nobody waiting to be served!";
  }

  // return "Currently serving " + queue.shift() + '.';
  return `Currently serving ${queue.shift()}.`
}

function currentLine(queue) {
  if (queue.length === 0) {
  return  "The line is currently empty."
  }
  var string = "The line is currently: ";
  for (let i = 0; i < queue.length; i++) {
    if (i === queue.length - 1) {
      string += (i+1)  + '.' + ' ' + queue[i];
    } else {
      string += (i+1)  + '.' + ' ' + queue[i] + ', ';
    }
  }
  return string;
}
