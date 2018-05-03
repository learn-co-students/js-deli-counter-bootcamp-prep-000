var katzDeli = [];

function takeANumber(katzDeli, name) {
  katzDeli.push(name);
  
  /*position = katzDeli.indexOf(name) + 1
  
  return `Welcome, ${name}. You are number ${position} in line.`
  
  .indexOf(x) gives index of x in array*/
  
  return (`Welcome, ${name}. You are number ${katzDeli.indexOf(name)+1} in line.`);
}

function nowServing(katzDeli) {
  if (katzDeli.length === 0) {
    return "There is nobody waiting to be served!";
  } else {
    return (`Currently serving ${katzDeli.shift()}.`);
    /*shift takes first element in array and returns it - removes first element from array*/
  }
}

function currentLine(katzDeli) {
  var line = [];
  let i = 0;
  while(i < katzDeli.length) {
      line.push(` ` + (i+1) +`. ` + katzDeli[i])
      i++;
  }
  if (katzDeli.length === 0) {
    return "The line is currently empty.";
  } else {
    return (`The line is currently:` + line);
  }
}
