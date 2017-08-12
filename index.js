var katzDeli = [];

function takeANumber(katzDeli, name){
  katzDeli.push(name);{
    return `Welcome, ${name}. You are number ${katzDeli.length} in line.`;
  }
  katzDeli = [...otherDeli, name]; {
    return `Welcome, ${name} You are number ${katzDeli.length} in line.`;
  }
};

function nowServing(katzDeliLine){
  if (katzDeliLine.length === 0) {
    return "There is nobody waiting to be served!";
  }
    return `Currently serving ${katzDeliLine.shift()}.`;
};

function currentLine(katzDeliLine){
  if (katzDeliLine.length === 0) {
    return "The line is currently empty.";
  }
  else {
    let newNames = [];
    for (let i = 0; i < katzDeliLine.length; i++) {
      newNames.push(` ${i+1}. ${katzDeliLine[i]}`)
  }
  return `The line is currently:${newNames.join(',')}`
 }
};
