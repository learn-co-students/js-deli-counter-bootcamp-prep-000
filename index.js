var katzDeliLine = []; 
function takeANumber(katzDeliLine, person) {
  katzDeliLine.push(person);
  return `Welcome, ${person}. You are number ${katzDeliLine.length} in line.`;
}


function nowServing (katzDeliLine) {
  if (katzDeliLine.length === 0) {
    return "There is nobody waiting to be served!";
  } else {
    var person = katzDeliLine[0];
    katzDeliLine.shift();
    return `Currently serving ${person}.` ;
  }
} 

function currentLine(katzDeliLine) {
  if (katzDeliLine.length === 0) {
    return "The line is currently empty.";
  } else { 
    var sentence = "The line is currently: ";
    for (let i = 0; i < katzDeliLine.length; i++) {
      if (i === katzDeliLine.length - 1) {
        sentence += `${i+1}. ${katzDeliLine[i]}`;
      } else {
        sentence += `${i+1}. ${katzDeliLine[i]}, `;
      }
    }
    return sentence;
  }
}