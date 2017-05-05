var katzDeli = [];
function takeANumber(katzDeliLine, name){
  katzDeliLine.push(name);
 return `Welcome, ${name}. You are number ${katzDeliLine.length} in line.`
};
function nowServing(katzDeliLine){
    if(!katzDeliLine.length){
    return 'There is nobody waiting to be served!'
}else{
  return "Currently serving " + katzDeliLine.shift() + "."
};
};
function currentLine(katzDeliLine){
if (!katzDeliLine.length) {
  return  "The line is currently empty." 
} 
var place = []
for (let i = 0, k = katzDeliLine.length; i < k; i++) {
   place.push(`${i + 1}. ${katzDeliLine[i]}`)
 }
 return 'The line is currently: ' + place.join(', ')
};