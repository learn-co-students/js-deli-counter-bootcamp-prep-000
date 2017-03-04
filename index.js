var katzDeli = [];

function takeANumber(katzDeliLine, cusName) {
  katzDeliLine.push(cusName)
  return `Welcome, ${cusName}. You are number ${katzDeliLine.indexOf(cusName) + 1} in line.`;
};

function nowServing(array) {
  if(array.length === 0) {
    return "There is nobody waiting to be served!"
  };
  return `Currently serving ${array.shift()}.`;
};

function currentLine(array) {
  if(array.length === 0) {
    return "The line is currently empty."
  } else {
    var cusWithNumbers = array;
    for(let i = 1; i < cusWithNumbers.length + 1; i++) {
      cusWithNumbers[i - 1] = ` ${i}. ${cusWithNumbers[i - 1]}`;
    };
    return `The line is currently:${cusWithNumbers}`
  };
};
