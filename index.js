
function takeANumber(array, name) {
  array.push(name);
  return `Welcome, ${name}. You are number ${array.length} in line.`;
}

function nowServing(array) {
  if(array.length === 0) {
    return "There is nobody waiting to be served!";
  } else {
    for(var i = 0; i < array.length; i++) {
      return `Currently serving ${array[i]}.`;
    }
  }
}