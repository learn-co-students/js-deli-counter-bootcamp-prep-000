
var otherDeli;
  var katzDeli=[];
function takeANumber(katzDeli,name){
  katzDeli.push(name);
  console.log( "Welcome, "+name+". You are number "+katzDeli.length+" in line.")
  return  "Welcome, "+name+". You are number "+katzDeli.length+" in line." ;


}

function katzDeliLine(name){


}

function nowServing(line){
  var num=line.length;
  if(num===0){
    return "There is nobody waiting to be served!"
  }
  else{
    return "Currently serving "+line.shift()+".";
  }


}

function currentLine(katz){
  var str="The line is currently: ";
var len=katz.length;

if(len==0){
  return "The line is currently empty.";
}else{
 for(var i=0;i<len;i++){
   var n=i+1;
   var s=', ';
   if(i==len-1)s='';
str+=n+". "+katz[i]+s;

 }
//str+=", ";
}
  return str;
}
