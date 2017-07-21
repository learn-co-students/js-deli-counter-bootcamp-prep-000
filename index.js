function takeANumber(current, name){
  current.push(name);
  return `Welcome, ${name}. You are number ${current.length} in line.`;
}

function nowServing(current){
  if (current.length>0){
    var name = current[0];
    current.shift();
    return `Currently serving ${name}.`;
  }
  else{
    return 'There is nobody waiting to be served!';
  }
}

function currentLine(l){
  var s = 'The line is currently: ';
  if (l.length>0){
    for (var i = 0;i<l.length-1;i++){
      s += `${i+1}. ${l[i]}, `;
    }
    s += `${i+1}. ${l[i]}`;
    return s;
  }
  else{
    return "The line is currently empty.";
  }
}
