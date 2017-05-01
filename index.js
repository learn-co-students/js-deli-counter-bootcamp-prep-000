var katzDeli = [];
var katzDeliLine = 1;
function takeANumber(katzDeliLine, name){
  //The function should return their position in line. And don't go being too programmer-y and give them their index.
  for (var i = 0; i < katzDeliLine.length; i++){
    katzDeliLine++;
    katzDeli.push(name);
         }
    return `Welcome, ${name}. You are number ${katzDeliLine} in line.`;
  //push name onto array. 
  //return array index + 1
}