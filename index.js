var katzDeli = [];

function takeANumber(katzDeli, newPerson){
  katzDeli.push(newPerson);
  // var i = 0;
  // for (i = 0; i < katzDeli.length; i++) {
  //   katzDeli.push("Welcome,"+ katzDeli[i] +". You are number"+ i+1 +"in line.")
  // }
  // console.log(katzDeli)
return "Welcome, "+ newPerson +". You are number "+ katzDeli.length +" in line.";
}

function nowServing(katzDeli){
 if (katzDeli.length > 0){
   return `Currently serving ${katzDeli.shift()}.` ; 
 }
 else {
   return "There is nobody waiting to be served!";
 }
return console.log(katzDeli);
}

function currentLine(katzDeli){
  var i = 0;
  var line = `The line is currently:`
 if (katzDeli.length === 0) {
  return "The line is currently empty.";
 }
  for (i = 0; i < katzDeli.length; i++) {
    line +=` ${i+1}. ${katzDeli[i]},`
  }
 line =  line.slice(0, -1)
return line;
}










