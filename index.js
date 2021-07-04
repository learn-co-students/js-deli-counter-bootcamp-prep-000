var katzDeli = [];

function takeANumber(katzDeliLine,name){

  // add new customers name to the line
  katzDeliLine.push(name);

  var position = katzDeliLine.length;
  //find the index of the person on line. because index starts at 0, add 1.
  return "Welcome, "+ name + ". You are number " + position + " in line.";
}
function nowServing(katzDeliLine){
  // If there is nobody in line, it should return "There is nobody waiting to be served!"
  var now_serving_msg = "";
  if (katzDeliLine.length === 0){
    now_serving_msg = "There is nobody waiting to be served!";

  // This function should return the first person in line and then remove that individual from the line.
  // The shift() method removes the first element from an array and returns that element. This method changes the length of the array.
  } else {
    now_serving_msg = "Currently serving "+ katzDeliLine.shift() + ".";
  }
  return now_serving_msg;
}
//test nowServing
console.log(nowServing(katzDeli));
console.log(katzDeli);

function currentLine(katzDeliLine){
  var current_line_msg = "";
  if (katzDeliLine.length === 0){
    current_line_msg = "The line is currently empty.";
  } else {
    current_line_msg = "The line is currently: ";
      for (var idx = 0; idx < katzDeliLine.length; idx++){
        var position = idx + 1;
        if (idx === katzDeliLine.length-1){
          current_line_msg = current_line_msg + position.toString() + "." + " " + katzDeliLine[idx];
        } else {
          current_line_msg = current_line_msg + position.toString() + "." + " "+ katzDeliLine[idx] + ", ";
        }
      }
    }
  return current_line_msg;
}

console.log(currentLine(katzDeli));
