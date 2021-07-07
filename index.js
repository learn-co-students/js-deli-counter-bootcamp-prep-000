var katzDeli = [];
function takeANumber(katzDeliLine, name){
  katzDeliLine.push(name);
  var n = 1+katzDeliLine.indexOf(name);
  return `Welcome, ${name}. You are number ${n} in line.`;
}
function nowServing(deliLine){
  if (deliLine.length > 0){
    let i = `Currently serving ${deliLine[0]}.`;
    deliLine.shift();
    return i;
  }
  else {
    return "There is nobody waiting to be served!"
  }
}
function currentLine(katzDeliLine){
  var lineList = [];
  if (katzDeliLine.length > 0){
      for (let i = 0; i < katzDeliLine.length; i++){
        lineList.push(` ${i+1}. ${katzDeliLine[i]}`);
      }
      return `The line is currently:${lineList}`
    }
  else {
    return "The line is currently empty.";
  }
}
