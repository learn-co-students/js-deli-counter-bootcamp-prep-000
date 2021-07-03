var katzDeli = [];

function takeANumber(katzDeli,name){
katzDeli.push(name);
var number = katzDeli.length;
return `Welcome, ${name}. You are number ${number} in line.`;
}

function nowServing(line){
  if(line.length>0){
  var first = line[0];
  line.shift();
  return `Currently serving ${first}.`;
}
else{
  return  "There is nobody waiting to be served!";
  }
}

function currentLine(line){
  var phrase = "The line is currently:";
  var name;
  if(line.length>0){
    for(var i = 0; i < line.length;i++){
     name = line[i]
     if(line[i] === line[line.length-1]){
     phrase+=  ` ${i + 1}. ${name}`
        }
        else{
       phrase+=  ` ${i + 1}. ${name},`
     }
    }
    return phrase;
  }
    else{
  return "The line is currently empty."}
}
