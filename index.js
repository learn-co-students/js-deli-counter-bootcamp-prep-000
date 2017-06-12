var katzDeli = []

function takeANumber(array, name) {
  array.push(name);
  return `Welcome, ${name}. You are number ${array.indexOf(name) +1} in line.`;
}


function nowServing(array){
  if (array.length <= 0){
    return 'There is nobody waiting to be served!';
  } else {
    var serving = `Currently serving ${array.shift()}.`;
    return serving;
  }
}


function currentLine(array){
  if (array.length <= 0) {
    return 'The line is currently empty.'
  } else {
    var loop = []
    for (var i = 0; i < array.length; i++){
      loop.push(`${i+1}. ${array[i]}`);
    }
    return `The line is currently: ${loop.join(', ')}`;

  }
}
