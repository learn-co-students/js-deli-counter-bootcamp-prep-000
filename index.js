var katzDeliLine = [];

function takeANumber(array, name){
  array.push(name);
  return `Welcome, ${name}. You are number ${array.length} in line.`;
}

function currentLine(array) {
  if (array.length ==0) {
    return `The line is currently empty.`;
  }
  let stringerfy = "";
  for (let index =0; index< array.length; index++) {
    stringerfy = stringerfy + (index+1) +". "+array[index]+", "
  }
  stringerfy = stringerfy.toString();
  stringerfy = stringerfy.slice(0, -2);
  return `The line is currently: ${stringerfy}`;
}

function nowServing(array) {
  if (array.length==0){
    return `There is nobody waiting to be served!`;
  }
  return `Currently serving ${array[0]}.`;
  array.shift();
  return array;

}
