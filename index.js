var katzDeli = [];

function takeANumber(katzDeliLine, name) {
  katzDeliLine.push(name);
  var currentNumber = katzDeliLine.length;
  return `Welcome, ${name}. You are number ${currentNumber} in line.`;
} 

//test function
//console.log(takeANumber(katzDeli, 'Joe'));
//console.log(katzDeli);


function nowServing(katzDeliLine) {
  if(katzDeliLine.length > 0) {
    return `Currently serving ${katzDeliLine.shift()}.`;
  } else {
    return "There is nobody waiting to be served!";
  }
}


function currentLine(katzDeliLine) {
  var y = 'The line is currently: ';
  var n = 1;
  var p = katzDeliLine.length;
  if (p>0){
  for (var i = 0; i<p; i+=1) {
    y += `${n}. ${katzDeliLine[i]}, `;
    n += 1;
  }
  var z = y.slice(0,y.length-2);
  return z
  }
  else {
    return 'The line is currently empty.';
  }
}

var katzDeliLine = [];

console.log(takeANumber(katzDeliLine, "Ada")); // "Welcome, Ada. You are number 1 in line."
console.log(takeANumber(katzDeliLine, "Grace")); // "Welcome, Grace. You are number 2 in line."
console.log(takeANumber(katzDeliLine, "Kent")); // "Welcome, Kent. You are number 3 in line."
 
console.log(currentLine(katzDeliLine)); // "The line is currently: 1. Ada, 2. Grace, 3. Kent"
 
console.log(nowServing(katzDeliLine)); // "Currently serving Ada."
 
console.log(currentLine(katzDeliLine)); // "The line is currently: 1. Grace, 2. Kent"
 
console.log(takeANumber(katzDeliLine, "Matz")); // "3"
 
console.log(currentLine(katzDeliLine)); // "The line is currently: 1. Grace, 2. Kent, 3. Matz"
 
console.log(nowServing(katzDeliLine)); // "Currently serving Grace."
 
console.log(currentLine(katzDeliLine)); // "The line is currently: 1. Kent, 2. Matz"





