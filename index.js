var katzDeliLine = [];

function takeANumber(customerQueue, customerName) {
  customerQueue.push(customerName);
  
  return "Welcome, " + customerName + ". You are number " + customerQueue.length + " in line.";
}

function nowServing(katzDeliLine) {
  if (katzDeliLine.length === 0) {
    
    return "There is nobody waiting to be served!";
    
  } else {
    
    for (let i = 0; i < katzDeliLine.length; i++) {
      var currentCustomer = katzDeliLine.shift();
      return "Currently serving " + currentCustomer + ".";
    }
    
  }
}

function currentLine(queue) {
  var queueList = "The line is currently: ";
  
  if (queue.length === 0) {
    return "The line is currently empty.";
  } else {
    for (let i = 0; i < queue.length; i++) {
      if(i === queue.length -1) {
        queueList += (i + 1 + ". " + queue[i]);
      } else {
        queueList += (i + 1 + ". " + queue[i] + ", ")
      }
    }
  }
  return queueList;
}