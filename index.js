var katzDeli = [];
var otherDeli = ["Steven", "Blake", "Avi"];

function takeANumber(katzDeli,name){
  katzDeli.push(name);
  return("Welcome, "+ name +". You are number "+ katzDeli.length +" in line.");
};

function nowServing(katzDeli){
  if (!line.length) {
    return "There is nobody waiting to be served!"
   }
  //otherDeli.push(name);
  //return (" Welcome, "+ name +". You are number "+ otherDeli.length +" in line.")
  //if (otherDeli===0) return ("There is nobody waiting to be served!");
};


function currentLine(katzDeliLine){
  for (var i=0; i<otherDeli.length ; i++)
if (otherDeli>0) {katzDeli.push("The line is currently:"+i+"."+otherDeli[i]+",") }
else {return "The line is currently empty."};
return katzDeli;
};
