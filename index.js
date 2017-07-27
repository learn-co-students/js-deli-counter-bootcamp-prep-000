var katzDeli = [];
var takeANumber = function(katzDeliLine,name){
katzDeliLine.push(name);
var position = katzDeliLine.indexOf(name)+1;
return "Welcome, "+ name + ". You are number " + position + " in line.";
};


var nowServing = function(katzDeliLine){
var now_serving_msg = "";
if (katzDeliLine.length === 0)
  {now_serving_msg = "There is nobody waiting to be served!"}
  else {
    now_serving_msg = "Currently serving "+ katzDeliLine[0] + ".";
    katzDeliLine.shift(0);
  }
  return now_serving_msg;
};

var currentLine = function(katzDeliLine){
var current_line = "";
var current_line_msg = "";
if (katzDeliLine.length === 0){
  current_line_msg = "The line is currently empty.";
}else {
  current_line_msg = "The line is currently: ";
  for (var idx = 0; idx < katzDeliLine.length; idx++){
  var position = idx + 1;
  if (idx === katzDeliLine.length-1) {
    current_line = current_line + position.toString() + "." + " " + katzDeliLine[idx];
  } else {current_line = current_line + position.toString() + "." + " "+ katzDeliLine[idx] + ", ";

  }
}
}
return current_line_msg + current_line;
};
