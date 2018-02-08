function takeANumber (katzDeliLine, name) {
  katzDeliLine.push(name);
  return `Welcome, ${name}. You are number ${katzDeliLine.length} in line.`;
}

function nowServing (katzDeliLine) {
  if (katzDeliLine===0) {
    return `There is nobody waiting to be served!`;
  } else {
   
     console.log(`"Currently serving ${katzDeliLine[0]}."`);
      return katzDeliLine.shift(katzDeliLine[0]);
  }
}

function currentLine (katzDeliLine) {
  
}