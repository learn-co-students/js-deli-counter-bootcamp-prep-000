var katzDeli = [];

function takeANumber(katzDeli,name){
katzDeli.push(name);
return "Welcome, " + name + ". You are number " + katzDeli.length + " in line."

}

function nowServing(katzDeli){
//if(katzDeli.length === -1){ return "There is nobody waiting to be served!";}
var currserv = katzDeli.shift(0);
if(currserv === undefined){return "There is nobody waiting to be served!"}
return "Currently serving " + currserv + "."

}

function currentLine(katzDeli){
  var len = katzDeli.length;
  var str = "The line is currently: "
  if(len === 0){ return "The line is currently empty."}
  let i = 0;
  while(i < len){
    i++
    str = str + i + ". " + katzDeli[i-1];
    //i++
    if(i<len){ str = str + ", "}
    //str = str + " "
  }
  return str;
}
