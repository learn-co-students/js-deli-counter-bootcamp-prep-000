function takeANumber(arr, name) {
  arr.push(name)

  for (var i = 1; i <= arr.length; i++) {


    if(arr[i] === name) {
      return 'Welcome, ' + name + '. You are number ' + i + ' in line.';
    }
  }
}

function takeANumber(arr, name) {
  arr.push(name);

  return 'Welcome, ' + name + '. You are number ' + (arr.indexOf(name) + 1) + ' in line.';
}

function nowServing(arr) {
  var visitorFlag = false;
  var msg = '';

  if(arr.length >= 1) {
    msg = 'Currently serving ' + arr[0] + '.';
    arr = arr.shift();
  } else {
    return 'There is nobody waiting to be served!';
  }

  return msg;
}

function currentLine(arr) {
  var string = 'The line is currently: ';

  if(arr.length >= 1) {
    for(var i = 0; i < arr.length; i++) {
      if(i < arr.length - 1) {
        string += (i + 1) + '. ' + arr[i] + ', ';
      } else{
        string += (i + 1) + '. ' + arr[i];
      }
    }
  } else {
    return 'The line is currently empty.';
  }

  return string;
}
