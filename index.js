var deliQue = []

function takeANumber(deli,newName){
 var position = deli.push(newName);
 return `Welcome, ${newName}. You are number ${position} in line.`;
}

function nowServing(deli){
  var serving = deli.shift()
  if (!serving){
    return "There is nobody waiting to be served!";
  }else{
    return `Currently serving ${serving}.`
  }
}

function currentLine(deli){
  //Format is: The line is currently: 1. Ada, 2. Grace
  //First check that there is some one in line
  if (deli.length === 0){ return "The line is currently empty."}
  
  var queString ="The line is currently: "
  //Pair numbers with names
  var strings = deli.map((x,i)=> `${i + 1}. ${x}`);
  //Join them all together 
  return queString + strings.join(', ');
}