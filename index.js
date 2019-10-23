var katzDeli = [];

function takeANumber(array, name) {
  array.push(name);
  return (`Welcome, ${name}. You are number ${array.length} in line.`);
}

function nowServing(array) {
  if(array.length > 0){
    var tempName = array[0];
    array.shift();
    return `Currently serving ${tempName}.`
  } else {
    return "There is nobody waiting to be served!"
  }
}

function currentLine (array) {
  if(array.length > 0) {
    //make new array to take customer names and position
    var newArray = [];

    for(var i = 0; i < array.length; i++) {
      newArray.push(` ${i+1}. ${array[i]}`)
    }
  } else {
    return "The line is currently empty."
  }
  return `The line is currently:${newArray}`
}
