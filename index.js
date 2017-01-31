
var katzDeli = [];//create empty array representing empty deli
//create a function called takeANumber with parameters katzDeliLine, cutomerName
function takeANumber (katzDeliLine, name) {
  //katzDeliLine holds current line of people
  katzDeliLine.push(name);
  var i = 0;
  //while loop to iterate through each person on line
  while(i <= katzDeliLine.length){
  katzDeli = "Welcome, " + name + ". You are number " + i + " in line."
  i++;
  }return katzDeli;
}

//build a function nowServing that returns and removes first name from line
function nowServing (katzDeliLine){
  var i = 0;
  //if statement to show current serving statement
  if(i < katzDeliLine.length){

  katzDeli = "Currently serving " + katzDeliLine[i] + ".";
  katzDeliLine.shift();//remove first person in katzDeliLine array
}else {
  katzDeli = "There is nobody waiting to be served!";//else return string when array is empty
}
return katzDeli;
}

//create function currentLine that returns the current line parameter of katzDeliLine
function currentLine(katzDeliLine){
    var i = 0;
    var count = 1;
    var lineOrder = [];
  while(i < katzDeliLine.length){
      lineOrder. push(" " + count + ". " +  katzDeliLine[i]);
      katzDeli = "The line is currently:" + lineOrder;
      i++;
      count++;
}
  if(katzDeliLine.length === 0){
    katzDeli = "The line is currently empty.";
  }
    return katzDeli;
}
