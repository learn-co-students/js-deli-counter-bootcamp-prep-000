//var katzDeli = [];
var katzDeliLine = [];
//const deliLine = ["Steven", "Blake", "Avi"];
takeANumber(katzDeliLine, "Ada"); // "Welcome, Ada. You are number 1 in line."
takeANumber(katzDeliLine, "Grace"); // "Welcome, Grace. You are number 2 in line."
takeANumber(katzDeliLine, "Kent"); // "Welcome, Kent. You are number 3 in line."

currentLine(katzDeliLine); // "The line is currently: 1. Ada, 2. Grace, 3. Kent"

nowServing(katzDeliLine); // "Currently serving Ada."

currentLine(katzDeliLine); // "The line is currently: 1. Grace, 2. Kent"

takeANumber(katzDeliLine, "Matz"); // "3"

currentLine(katzDeliLine); // "The line is currently: 1. Grace, 2. Kent, 3. Matz"

nowServing(katzDeliLine); // "Currently serving Grace."

currentLine(katzDeliLine); // "The line is currently: 1. Kent, 2. Matz"

function takeANumber(katzDeliLine,name){
  katzDeliLine.push(name);
  var str = "Welcome, "+ katzDeliLine[(katzDeliLine.length)-1] +". You are number "+ katzDeliLine.length +" in line."
  return str;
}

function nowServing(array){
  if(array.length == 0){
    return "There is nobody waiting to be served!";
  }
  const str = "Currently serving "+ array.shift() +".";

  return str;
}

function currentLine(array){
  if(array.length == 0){
    return "The line is currently empty.";
  }
  var strn = "The line is currently: ";
  console.log(array);
  for(var i = 0; i<array.length;i++){
    if(i==array.length-1){
      strn += (i+1)+". "+ array[i];
      return strn;
    }
    strn += (i+1)+". "+ array[i]+", ";
  }
  console.log(strn);
  return strn;
}
