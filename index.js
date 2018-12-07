function takeANumber(katzDeli, name) {
katzDeli.push(name);
return `Welcome, ${name}. You are number ${katzDeli.length} in line.`;
}

function nowServing(katzDeli) {
  if (katzDeli.length > 0) {
    var currentCustomer = katzDeli[0];
    katzDeli.shift();
    return `Currently serving ${currentCustomer}.`;
  } else {
    return 'There is nobody waiting to be served!'
  }
}

function currentLine(katzDeli) {
  var message;
  if (katzDeli.length === 0) {
    message = 'The line is currently empty.'
  } else {
  message = 'The line is currently:';
  var i = 0;
  message = message + ` ${i+1}. ${katzDeli[i]}`;
  i++;
  while (i < katzDeli.length) {
    message = message + `, ${i+1}. ${katzDeli[i]}`;
    i++;
  }
  }
  return message;
}