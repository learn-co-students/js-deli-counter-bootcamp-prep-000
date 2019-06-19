function takeANumber(array, name) {
  array.push(name);
  return `Welcome, ${name}. You are number ${array.length} in line.`;
}

function nowServing(array){
  if (array.length == 0){
    return "There is nobody waiting to be served!";
  } else {
    return `Currently serving ${array.shift()}.`;
  }
}

function currentLine(array) {
  if (array.length == 0){
    return "The line is currently empty.";
  } else {
    var str = "The line is currently: ";
    for (let i = 0; i < array.length; i++){
      str += `${i+1}. ${array[i]}, `
    }
    str = str.slice(0, -2);
    return str;
  }
}
