var katzDeli = [];

function takeANumber(katzDeliLine, person) {
  katzDeliLine.push(person);
  return `Welcome, ${person}. You are number ${katzDeliLine.length} in line.`;
}

function nowServing(katzDeliLine) {
  if (katzDeliLine.length === 0) {
    return "There is nobody waiting to be served!";
  } else {
    let currentCustomer = katzDeliLine[0];
    katzDeliLine.shift();
    return `Currently serving ${currentCustomer}.`;
  }  
}

function currentLine(katzDeliLine) {
  if (katzDeliLine.length === 0) {
    return "The line is currently empty.";
  } else {
    let custList = "The line is currently: ";
    for(let i = 0; i < katzDeliLine.length; i++) {
      custList += `${i + 1}. ${katzDeliLine[i]}`;
      custList += (i < katzDeliLine.length - 1)? ", " : "";       
    }
    return custList;
  }
}