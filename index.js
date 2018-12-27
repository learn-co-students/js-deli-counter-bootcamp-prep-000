var katzDeliLine = [];
    name = ["Ada", "Grace", "Kent", "Matz"];
    

function takeANumber(katzDeliLine,name) {
  katzDeliLine.push(name);
    return `Welcome, ${name}. You are number ${katzDeliLine.length} in line.`;
}

function nowServing(name) {
  if (name>[]) {
    return `Currently serving ${name.shift()}.` }
  else {
    return "There is nobody waiting to be served!" }
}

function currentLine(katzDeliLine) {
var lineNameandNumber=[];
  if(katzDeliLine>[]) {
      for(var i=0;i<katzDeliLine.length;i++) {
      lineNameandNumber.push(` ${i+1}. ${katzDeliLine[i]}`); }
    return "The line is currently:"+ lineNameandNumber; }
  else {
    return "The line is currently empty." }
}
