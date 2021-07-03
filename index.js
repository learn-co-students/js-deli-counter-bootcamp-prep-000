var katzDeliLine= [];

function takeANumber(katzDeliLine,name){
  if (katzDeliLine.length===0){
    katzDeliLine.push(name);
    var num= 1;
    return (`Welcome, ${name}. You are number ${num} in line.`);
  }
  else{
    katzDeliLine.push(name);
    return (`Welcome, ${name}. You are number ${katzDeliLine.length} in line.`);
  }
}

function nowServing(katzDeliLine){
  if (katzDeliLine.length===0){
    return ('There is nobody waiting to be served!');
  }
  else{
    return (`Currently serving ${katzDeliLine.shift()}.`);
  }
}

function currentLine(katzDeliLine){
  if(katzDeliLine.length===0){
    return ('The line is currently empty.');
  }
  else{
    var current= [];
    for (var i=0;i<katzDeliLine.length;i++){
      var num= i+1;
      current.push(` ${num}. ${katzDeliLine[i]}`);
    }
    return(`The line is currently:${current}`);
  }
}