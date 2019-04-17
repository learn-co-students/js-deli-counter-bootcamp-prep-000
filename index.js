function takeANumber(line, name){
  line.push(name);
  return (`Welcome, ${name}. You are number `+line.length+" in line.")
}

function nowServing(line){
  if (line.length===0){
    return ("There is nobody waiting to be served!")
  }
  else return ("Currently serving "+line.shift()+".");
}

function currentLine(line){
  var a="The line is currently: ";
  if (line.length===0){
    a="The line is currently empty.";
  } else for (var i=0;i<line.length-1; i++){
    a+=`${i+1}. `+line[i]+", ";}
  if (line.length!=0){
    a+=`${i+1}. `+line[line.length-1]
  }
    return a;
}
