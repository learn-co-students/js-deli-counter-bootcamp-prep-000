function takeANumber(array,name) {
  array.push(name)
  return `Welcome, ${name}. You are number ${array.length} in line.`
}

function nowServing(array) {
  if (array.length > 0) {
    return `Currently serving ${array.shift()}.`;
  }
    else {return 'There is nobody waiting to be served!';
  }
}

function currentLine(array) {
  let queue = "The line is currently: ";
  if (array.length > 0) {
    for (var i = 0;i < array.length-1;i++)
    {queue = queue + `${i+1}. ${array[i]}, `;}
	queue = queue + `${i+1}. ${array[i]}`;
  }
	else {queue = "The line is currently empty."}
  return queue;
}
