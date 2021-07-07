var katzDeli = [];

function takeANumber(array, name) {
  array.push(name);
  return `Welcome, ${name}. You are number ${array.length} in line.`;
}

function nowServing(array) {
    if(array.length > 0) {
      return `Currently serving ${array.shift()}.`;
    } else {
      return "There is nobody waiting to be served!";
    }
}






function currentLine(array) {
  var newArr = [];
  if(array.length > 0){
  for(var i = 0; i < array.length; i++) {
    newArr.push(`${array.indexOf(array[i]) + 1}. ${array[i]}`);
  }
    return `The line is currently: ${newArr.join(', ')}`;
  } else {
    return "The line is currently empty."
  }
}