var katzDeli = [];

function takeANumber(katzDeliLine, person){
  katzDeliLine.push(person);
  return `Welcome, ${person}. You are number ${katzDeliLine.length} in line.`;
};

function nowServing(arr){
  if (arr.length === 0){
    return "There is nobody waiting to be served!";
  };
  var curr = arr[0];
  arr.shift();
  return `Currently serving ${curr}.`;
};

function currentLine(katzDeliLine){
  var message = "";
  var line = ["The line is currently:"];
  if (katzDeliLine.length === 0){
    return "The line is currently empty.";
  };
  for (var i = 0; i < katzDeliLine.length; i++){
    line.push(`${i + 1}. ${katzDeliLine[i]}${(i < katzDeliLine.length - 1) ? "," : ""}`)
  };
  message = line.join(" ");
  return message;
};
