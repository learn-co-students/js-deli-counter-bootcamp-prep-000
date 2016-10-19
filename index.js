var katzDeli=[];

function takeANumber(deli, name){
deli.push(name);
return `Welcome, ${name}. You are number ${deli.indexOf(name)+1} in line.`;
}

function nowServing(deli){
  if (deli.length===0) {
    return "There is nobody waiting to be served!";
  }
  else {
  return `Currently serving ${deli.shift()}.`;
  }
}

function currentLine(deli){
  if (deli.length===0) {
    return "The line is currently empty.";
  }
  else {
  var string="The line is currently:";
  for (var i=0; i<deli.length; i++){
    string+=` ${i+1}. ${deli[i]}${(i===deli.length-1)? "":","}`;
  }
  return string;
}

}
