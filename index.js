function takeANumber(currentline,name){
  currentline.push(name);
  var message = `Welcome, ${name}. You are number ${currentline.length} in line.`;
  return message;
}

function nowServing(currentline){
  if(currentline.length===0){
    return "There is nobody waiting to be served!"
  }else{
    var empty = currentline.shift();
    return `Currently serving ${empty}.`
  }
}

function currentLine(currentline){
  if(currentline.length === 0){
    return "The line is currently empty."
  }else{
    var empty = ["The line is currently:"];
    for(var i = 0;i<currentline.length;i++){
      if(i === currentline.length-1){
        empty.push(` ${i+1}. ${currentline[i]}`);
      }else{
        empty.push(` ${i+1}. ${currentline[i]},`);
      }
    }
    return empty.join("");
  }
  
}



