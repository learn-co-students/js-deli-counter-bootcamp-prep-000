function takeANumber[katzDeliLineArray, newName]{
  katzDeliLineArray.push(newName);
  return katzDeliLineArray.length
}
function nowServing(katzDeliLineArray){
  if (katzDeliLineArray.length < 1) return "The line is currently empty";
  return katzDeliLineArray.shift;
}
function currentLine(katzDeliLineArray){
  if (katzDeliLineArray.length < 1) return "The line is currently empty";
  var outString;
  for (i=katzDeliLineArray.length;i<=katzDeliLineArray.length;i++){
    if (i!=1) outString = outString + ', '
      outString=`${outString}${i}. ${katzDeliLineArray[i]};
  }
  return outString;
}
var katzDeli = [];
