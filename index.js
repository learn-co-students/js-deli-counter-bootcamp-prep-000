function takeANumber(katzDeliLineArray, newName){
  katzDeliLineArray.push(newName);
  return `Welcome, ${newName}. You are number ${katzDeliLineArray.length} in line.`;
}
function nowServing(katzDeliLineArray){
  if (katzDeliLineArray.length < 1) return "There is nobody waiting to be served!";
  var strOut = "Currently serving " + katzDeliLineArray.shift() + ".";
  return strOut;
}
function currentLine(katzDeliLineArray){
  if (katzDeliLineArray.length < 1) return "The line is currently empty.";
  var outString="";
  for (var i=0;i<=katzDeliLineArray.length-1;i++){
    if (i>0) outString = outString + ',';
    if (i===0) {
      outString=`The line is currently: ${i+1}. ${katzDeliLineArray[i]}`;
    } else {
      outString=`${outString} ${i+1}. ${katzDeliLineArray[i]}`;
    }
  }
  return outString;
}
var katzDeli = [];


console.log(currentLine(katzDeli));
console.log(takeANumber(katzDeli,"Joe Blow"));
console.log(takeANumber(katzDeli,"Joe Blow2"));
console.log(JSON.stringify(katzDeli));
console.log(currentLine(katzDeli));
console.log(nowServing(katzDeli))
console.log(currentLine(katzDeli));
console.log(currentLine(katzDeli));
console.log(nowServing(katzDeli))
console.log(currentLine(katzDeli));
