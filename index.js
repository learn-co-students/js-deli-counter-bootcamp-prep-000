var katzDeliLine = [];

function takeANumber(line,name){
  line.push(name);
  for (var i=0;i<line.length;i++){
    if (line[i]===name) {
    var spot = i+1;
    return `Welcome, ${name}. You are number ${spot} in line.`;
    }
  }
}

function nowServing(){
  while (katzDeliLine.length>0){
    return `Currently serving ${katzDeliLine[0]}`;
    katzDeliLine.pop();
  }
  return 'There is nobody waiting to be served!'
}

function currentLine(){
  
}
