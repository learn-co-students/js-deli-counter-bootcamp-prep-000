var katzDeliLine = [];

function takeANumber(arr, name) {
  arr.push(name);
  var len = arr.length;

  return `Welcome, ${name}. You are number ${len} in line.`;
}

function nowServing(arr) {
  var mess;
  arr.length <= 0 ? mess = `There is nobody waiting to be served!` : mess = `Currently serving ${arr[0]}.`;
  arr.shift();
  return mess;
}

function currentLine(arr) {
  var i = 0,
  names = [],
  mess;

  while (i < arr.length) {
    names.push(`${i + 1}. ${arr[i]}`);
    i++;
  }

  names = names.join(', ');

  arr.length <= 0 ? mess = `The line is currently empty.` : mess = `The line is currently: ${names}`;

  return mess;
}
