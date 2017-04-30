var katzDeli = [];
function takeANumber(deli,name){
  deli.push(name);
  return `Welcome, ${name}. You are number ${deli.length} in line.`;
}
function nowServing(deli){
  if(deli.length == 0){
    return "There is nobody waiting to be served!";
  }else{
    var serving = deli[0];
    deli.shift();
    return `Currently serving ${serving}.`;
  }
}
function currentLine(line){
  if(line.length == 0){
    return "The line is currently empty."
  }else{
    var list = "The line is currently:";
    for(var i = 0; i<line.length; i++){
      if(i == line.length-1) {
        list = list+` ${i+1}. ${line[i]}`;
      }
      else {
        list = list+` ${i+1}. ${line[i]},`;
      }
    }
    return list;
}
}
