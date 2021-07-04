function takeANumber(arr, name) {
  arr.push(name);
  return `Welcome, ${name}. You are number ${arr.length} in line.`;
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
  arr.forEach((person, index) => {
    announce += `${index + 1}. ${person}${arr.length - 1 === index ? '' : ', '}`
  });
  return "The line is currently: " + announce;
}

let callCount = 0;

function takeANumber2(line) {
  callCount++;
  
  line.push(callCount);
  
  return `Welcome! You are number ${callCount}~`
}