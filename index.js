/*Build a function that a new customer will use when entering the deli. The function, takeANumber, should accept the current line of people, katzDeliLine, along with the new person's name as parameters. The function should return their position in line. And don't go being too programmer-y and give them their index. These are normal people. If they are 7th in line, tell them that. Don't get their hopes up by telling them they are number 6 in line.
Build a function nowServing. This function should return the first person in line and then remove that individual from the line. If there is nobody in line, it should return "There is nobody waiting to be served!"
Build a function currentLine that returns the current line. For example, if katzDeliLine is currently ["Ada", "Grace"], currentLine(katzDeliLine) would return "The line is currently: 1. Ada 2. Grace". If there is nobody in line, it should return "The line is currently empty."*/

function takeANumber(katzDeliLine,name) {
  katzDeliLine.push(name);
  return `Welcome, ${name}. You are number ${katzDeliLine.length} in line.`;
}
function nowServing(katzDeliLine){
  var firstPerson = katzDeliLine[0];
  if (katzDeliLine.length===0) {
    return "There is nobody waiting to be served!";
  }
  katzDeliLine.shift();
  return `Currently serving ${firstPerson}.`;
}
function currentLine(katzDeliLine){
var i = 1;
var theCurrentLine=[];
  if(katzDeliLine.length===0){
    return "The line is currently empty.";
  }
    else{
      while(i<katzDeliLine.length){
      theCurrentline.push(`${i}. ${katzDeliLine[(i-1)]}, `)
    i++}
      return `The line is currently: ${i}.${katzDeliLine[0]}`;
}
}
