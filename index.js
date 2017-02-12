var katzDeli = [];

function takeANumber(katzDeliLine, name){
  katzDeliLine.push(name);
  return `Welcome, ${name}. You are number ${katzDeliLine.length} in line.`;
}

function nowServing(array){
  if (array.length > 1) {
    return `Currently serving ${array.shift()}.`;
  } else {
    return 'There is nobody waiting to be served!';
  }
}

function currentLine(array){
  if (array.length > 1) {
    for (let i = 0; i < array.length; i++) {
      array[i] = ` ${i + 1}. ` + array[i];
    }
    return `The line is currently:${array}`;
  } else return 'The line is currently empty.';
}
