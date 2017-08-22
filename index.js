
var katzDeli =[];


function takeANumber(katzDeliLine,customer){

katzDeliLine.push(customer);
return `Welcome,${customer}.You are number ${katzDeliLine.length} in line.`;
}

function nowServing(){
  if (katzDeliLine.length !=0){
  return (`Currently serving ${katzDeliLine.shift()}`);
   }
  else {
      return ("There is nobody waiting to be served!");}
}

function currentLine(katzDeliLine){
var numberkatz=[];
 if (katzDeliLine.length === 0){
   return "The line is currently empty.";
 }
 else{

   for(var i=0;i<katzDeliLine.length;i++){
    numberkatz.push(`${i+1}.${katzDeliLine[i]}`) }
   return `The line is currently: ${numberkatz}`;
}
}




var katzDeliLine=[];
console.log(takeANumber(katzDeliLine,"Ada"));
console.log(takeANumber(katzDeliLine, "Grace"));
console.log(takeANumber(katzDeliLine, "Kent"));
console.log(katzDeliLine);
console.log(currentLine(katzDeliLine));
console.log(nowServing());
console.log(currentLine(katzDeliLine));
console.log(takeANumber(katzDeliLine, "Matz"));
console.log(currentLine(katzDeliLine));
console.log(nowServing());
console.log(currentLine(katzDeliLine));
console.log(katzDeliLine);
console.log(nowServing());
console.log(nowServing());
console.log(currentLine(katzDeliLine));
