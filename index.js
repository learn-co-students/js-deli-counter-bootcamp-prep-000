var katzDeliLine = [];

function takeANumber (katzDeliLine, name){
  katzDeliLine.push(name);
  var pos = katzDeliLine.length;
  return `Welcome, ${name}. You are number ${pos} in line.`;
}

function nowServing(line){
  if(line.length===0){
    return "There is nobody waiting to be served!";
  }
  else{
    return `Currently serving ${line.shift()}.`;
  }
}

function currentLine(line){
  console.log(line);
  var n = 1;
  var st ="The line is currently: "
  if(line.length > 0){
    for(var i = 0; i<line.length; i++){
      if(i === line.length-1){
        st =`${st}${n++}. ${line[i]}`;
      }
      else{
        st =`${st}${n++}. ${line[i]}, `;
      }
    }
    return st;
  }
  else{
    return ("The line is currently empty.")
    }
}
