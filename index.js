//function takeANumber(queue, newCustomer):
// tell the customer where they are in the line
// use .length because index will be 1 number too low

function takeANumber(queue, newCustomer) {
  queue.push(newCustomer);
  return `Welcome, ${newCustomer}. You are number ${queue.length} in line.`;
}


// function currentLine(queue):
// 1. Determine whether the queue is empty.  If it is, return a message.
// 2. If there is somebody in the queue, take them off the front of the queue
// 3. Put their name into a message saying who is being served.

function nowServing(queue) {
  if (queue.length === 0) {
    return "There is nobody waiting to be served!";
  } // the queue is not empty so remove the first person from the queue and serve them
  const firstPerson = queue.shift(); // shift() mutates the original array
  return `Currently serving ${firstPerson}.`; // shift() returns the value it removed
}


// function currentLine(queue):
// 1. Determine whether the queue is empty.  If it is, return a message.
// 2. If the queue isn't empty, return a string:
// 3. get each person's name and their position in the queue...
// 3b. ...put these into a new array, using .map(callback)
// 3c. ...use the callback to get the index of each person as well as their name.  add 1 to index get their place
// 4. join the array produced by .map with , separators
// 5. put the resulting string into the phrase

function currentLine(queue) {
    if (queue.length === 0) {
      return "The line is currently empty.";
    } // otherwise return the queue as a string inside a phrase ('else' not required as return escapes the method)
    let queueStatus = queue.map(function personInQueueCallback(person, position) {
      return `${position +1}. ${person}`;
    }).join(", ");
      return `The line is currently: ${queueStatus}`;
  }
