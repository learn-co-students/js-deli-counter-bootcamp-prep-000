
function takeANumber(kdl,name){
 kdl.push(name);

return `Welcome, ${name}. You are number ${kdl.length} in line.`;

}

function nowServing(kdl){
  if (kdl.length===0)
  {return  "There is nobody waiting to be served!";}
  else {
  var temp = kdl[0];
  kdl.shift();
  return `Currently serving ${temp}.`;
  }
}
function currentLine(kdl){
 if (kdl.length===0)
  {return  "The line is currently empty.";} 
  var cr = "The line is currently: ";
  for (let x = 0; x<kdl.length;x++){
    cr += (x+1).toString() + ". " + kdl[x] + ", ";
  }
  return cr.slice(0,cr.length -2);
}