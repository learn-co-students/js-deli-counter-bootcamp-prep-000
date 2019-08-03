// Deli Counter Lab

// Take A Number

function takeANumber(queue, newperson) {
  queue.push(newperson);
  return `Welcome, ${newperson}. You are number ${queue.length} in line.`;
}

// Now Serving

function nowServing(queue) {
  if (queue.length === 0) {
    return "There is nobody waiting to be served!";
  } else {
    var firstperson = queue[0];
    queue.shift();
    return `Currently serving ${firstperson}.`;
         }
}

// Current Line 

function currentLine(queue) {
  if (queue.length === 0) {
    return "The line is currently empty.";
  } else {
    var message = "The line is currently:";
    
    // 'i' will be the index of each person in the queue.  'i + 1' will be the actual position of a person in the queue.
    
    // Queue length counts all values in the array, so it will return the actual position of the final person in the queue,  which will be 1 higher than their index.
    
    // For the below 'for loop', 'i' will increment and execute until it reaches the queue length.  On reaching the queue length it will not execute the loop, which doesn't matter because there will be no index associated with this number.
  
    for (var i = 0; i != queue.length; i++) {
      
    // To understand if we're at the final loop and remove the comma we check if 'i' (the current index) is equal to 'queue.length - 1' (the final person's index).
      
      if (i == queue.length - 1) {
      message = message + ` ${i + 1}. ${queue[i]}`;
                                 } else {
      message = message + ` ${i + 1}. ${queue[i]},`;
                                 }
    }
    return message;
  }
}