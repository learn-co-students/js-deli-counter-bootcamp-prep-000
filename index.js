function takeANumber(arr, name) {
  arr.push(name);
  return `Welcome, ${name}. You are number ${arr.indexOf(name) + 1} in line.`;
}

function nowServing(arr) {
  if (arr.length === 0) {
    return "There is nobody waiting to be served!";
  }
  let serving = `Currently serving ${arr[0]}.`;
  arr.shift();
  return serving;
}

function currentLine(arr) {
    if (arr.length === 0) {
    return "The line is currently empty.";
  }
  
  let announce = "";
  arr.forEach(person => {
    announce += `${arr.indexOf(person) + 1}. ${person}${arr.length - 1 === arr.indexOf(person) ? '' : ', '}`
  });
  return "The line is currently: " + announce;
}