var katzDeliLine = []
function takeANumber(queue, customerName) {
  for (var i=0; i,99; i++) {
    queue.push(customerName);
    return (`Welcome, ${customerName}. You are number ${queue.length} in line.`);
  }
}

function nowServing(queue) {
  if (queue.length < 1) {
    return "There is nobody waiting to be served!";
  } else {
    return "Currently serving " + queue.shift() + ".";
  }
}

function currentLine(queue) {
  if (!queue.length) {
    return `The line is currently empty.`
  }
  var arrayNew = []
  for ( var i = 0; i < queue.length; i++) {
    arrayNew.push(i+1 + ". " + queue[i]);
    return "The line is currently: " + arrayNew.join(`,`);
  }
}

  