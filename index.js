var katzDeli = [];

function takeANumber(katzDeli, name){
katzDeli.push(name);
return (`Welcome, ${name}. You are number ${katzDeli.length} in line.`)
}
function nowServing(Deli){
var name;
if (Deli.length === 0){
return "There is nobody waiting to be served!";
}
name = Deli.shift();
return `Currently serving ${name}.`}

var katz =[];
function currentLine (katzDeliLine){
  for(let i = 0; i < katzDeliLine.length; i++){
   katz.push(` ` +[i+1]+ `. ` + katzDeliLine[i]);

   }
    if(katzDeliLine.length === 0){
        return "The line is currently empty.";
}
        else
        return  (`The line is currently:` + katz);
        }
