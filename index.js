function takeANumber(array, name) {
  array.push(name);
  return 'Welcome, ' + name + '. You are number ' + array.length + ' in line.';
}


function nowServing(array) {
  if (array.length === 0) {
    return "There is nobody waiting to be served!";
  } else {
    return `Currently serving ${array.shift(0)}.`;
  }
}


function currentLine (array) {
  return array.length === 0
   ? "The line is currently empty."
   : `The line is currently: ${
       array.map((entry, i) => `${i+1}. ${entry}`)
         .join(", ")
     }`;
}

