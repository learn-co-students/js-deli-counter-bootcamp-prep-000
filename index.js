var katzDeli=[];

function takeANumber(katzDeliLine, name){
  katzDeliLine.push(name);
  return "Welcome, "+name+". You are number "+ parseInt(katzDeliLine.length)+ " in line."
}

function nowServing(katzDeliLine){
  if (katzDeliLine.length==0){
  return "There is nobody waiting to be served!"
  }
  else {
  var output="Currently serving "+katzDeliLine[0]+".";
  katzDeliLine.shift()
  return output;
  }
}

function currentLine(katzDeliLine){
  var output=""
  if (katzDeliLine.length==0){
  return  "The line is currently empty."
  }  
  else { 
  for (var y=0;y<katzDeliLine.length;y++)
  var output=output+" "+ parseInt(y+1)+". "+ katzDeliLine[y]+ ",";
}
var outputs= "The line is currently:"+ output
outputs=outputs.slice(0,-1)
return outputs
}