var katzDeliLine = [];

function takeANumber(array, name){
  array.push(name);
  return `Welcome, ${name}. You are number ${array.length + 1} in line.`;
}

function currentLine(array) {
  if (array.length ==0) {
    return `There is nobody in line.`;
  }
}

function nowServing(array) {
  if (array.length==0){
    return ``;
  } else {
    return `Currently serving ${array[0].}`;
    array.shift();
    return array;
  }
}
