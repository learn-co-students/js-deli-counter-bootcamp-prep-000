var katzDeli = [];

function takeANumber(katzDeli, customer) {
  katzDeli.push(customer);
  return("Welcome, " + customer +". You are number " + katzDeli.length + " in line.");
}

function nowServing(katzDeli) {
  if(katzDeli.length === 0) {
    return "There is nobody waiting to be served!"
  } else {
    var nextUp = katzDeli.shift();
    return ("Currently serving " + nextUp + ".");
  }
}

function currentLine(katzDeli) {
  if (katzDeli.length === 0) {
    return("The line is currently empty.")
  } else {
    var queue = [];
    for (var i = 0; i < katzDeli.length; i++) {
      queue.push(' ' + [i + 1] + '. ' + katzDeli[i])
    }
    return("The line is currently:" + queue)
  }
}
