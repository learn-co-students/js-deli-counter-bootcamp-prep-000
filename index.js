function takeANumber(array, name){
  array.push(name);
  return `Welcome, ${name}. You are number ${array.indexOf(name) + 1} in line.`;
}

function nowServing(array){
  if(array.length > 0){
    var first = array[0];
    array.shift();
    return `Currently serving ${first}.`;
  } else {
    return "There is nobody waiting to be served!";
  }
}

function currentLine(array){
  if(array.length > 0){
    console.log("The line is currently: ");
    let i = 0;
    return `The line is currently: 1. ${array[i]}, 2. ${array[++i]}, 3. ${array[++i]}`;
  } else {
    return "The line is currently empty.";
  }  
}