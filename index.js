//take a Number

var katzDeliLine =[]; 

function takeANumber(katzDeliLine, name){
  // var number =number++;
 //katzDeliLine = 0;
// katzDeliLine++;
 katzDeliLine.push(name);
  return ("Welcome, "+name+". You are number "+katzDeliLine.length+" in line.")
}

function nowServing (katzDeliLine){
   
  if (katzDeliLine.length === 0){
  return ("There is nobody waiting to be served!")
  }
  else{
    var current = katzDeliLine[0];
    katzDeliLine.shift();
    return ("Currently serving " +current+"." );
    
  }

}

var katzDeliLine, text,res,queue;
katzDeliLine = ["britt", "tom", "ben", "nils"];

function currentLine (katzDeliLine){

queue = katzDeliLine.length;
text = "The line is currently: ";

if (queue === 0){
   return("The line is currently empty."); }
   
   else{

for (var i = 0; i < queue; i++) {
   text+=(i+1) + ". " +katzDeliLine[i]+ ", ";
   res = text.slice(0,-2);
}
console.log(text);
console.log(res);
return (res);
} 
}
 
