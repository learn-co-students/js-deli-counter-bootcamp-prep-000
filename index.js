var katzDeliLine = []; // This is an empty array where peoples names & katzDeli Line Will be stored
function takeANumber(katzDeliLine,name) {
  katzDeliLine.push(name); // adding names of customers to the array katzDeliLine
  var number = katzDeliLine.length; // how many customers are in the array
  return `Welcome, ${name}. You are number ${number} in line.` //returning
}

function nowServing(katzDeliLine) {
  if (katzDeliLine.length <= 0) {
    return "There is nobody waiting to be served!";
  } else {
  return `Currently serving ${katzDeliLine.shift()}.`;
}
}
function currentLine(line) {
  if (line.length === 0) {
    return "The line is currently empty."
  }
  var newArray =[];
  for (var i = 0; i < line.length; i++) {
     newArray.push(` ${i+1}. ${line[i]}`);
   }
    return `The line is currently:` + newArray;
}
