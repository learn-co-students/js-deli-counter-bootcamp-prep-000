var katzDeli = [];

function takeANumber(queue,name) {
  queue.push(name);
  return 'Welcome, ' + name + '. You are number ' + (queue.length) + ' in line.';
}

function nowServing(array) {
  if (array.length == 0) {
    return "There is nobody waiting to be served!";
  }
  else {
    return 'Currently serving ' + array.shift() + '.';
  }
}

function currentLine(array) {
  var ans = 'The line is currently';
  if (array.length == 0) {
    ans = ans + ' empty.'
    }
  else {
    ans = ans + ': ';
    for (let i = 0; i < array.length; i++){
      ans = ans + (i + 1) + '. ' + array[i];
      if (array.length - i != 1) {
        ans = ans + ', ';
      }
    }
  }
  return ans;
}
