var katzDeli = [];
function takeANumber(katzDeli, name){
  katzDeli.push(name)
  return "Welcome, "+name+". You are number "+katzDeli.length+" in line."
}

function nowServing(deliLine){
  if(deliLine.length == 0){
    return "There is nobody waiting to be served!";
  }else {
    return "Currently serving "+ deliLine.shift()+ ".";
  }
}

function currentLine(line){
  if(line.length == 0){
    return "The line is currently empty.";
  } else {
    var ar = "";
    for (var i = 0; i < line.length-1; i++){
        ar += `${i+1}. ${line[i]}, `;
    }
    ar = ar+`${line.length}. ${line[line.length-1]}`
    return "The line is currently: "+ ar;
  }
}
