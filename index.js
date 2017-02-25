var katzDeli=[];
function takeANumber(katzDeliLine, name){
  katzDeliLine.push(name);
  return ('Welcome, '+name+'. You are number '+ katzDeliLine.length + ' in line.');
}

function nowServing(deliLine){
  if(deliLine.length>0){
  var customer =   deliLine.shift();
    return 'Currently serving '+customer+'.';
  } else {
    return 'There is nobody waiting to be served!';
  }
}

function currentLine(line){

  if(line.length>0){
    var str='The line is currently: ';
    for(var i=0; i<line.length; i++){
      str= str + (i+1) +'. '+ line[i];
      if(i<line.length-1){
        str=str + ', '
      }
    }
  } else {
    var str = 'The line is currently empty.';
  }
  return str;
}
