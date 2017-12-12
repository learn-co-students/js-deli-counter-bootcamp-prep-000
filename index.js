function takeANumber(katzDeliLine,NewPerson){
katzDeliLine.push(NewPerson);
return 'Welcome, ' + NewPerson + '. You are number '+ katzDeliLine.length + ' in line.';
}

function nowServing(katzDeliLine){
  for (var i = 0; i < katzDeliLine.length; i++){ 
    katzDeliLine.shift(i)
  
  }
   return 'currently serving ' + katzDeliLine.shift(i) +'.' ;
}
  if(katzDeliLine.length === 0){
  return 'There is nobdy waiting to be served!';
  }
}

function currentLine(katzDeliLine) {
  var newLine = [];
    if (katzDeliLine.length === 0){
      return "The line is currently empty.";
    }
  for(var i = 0; i < katzDeliLine.length; i++){
     newLine.push((i + 1) + '. ' +  katzDeliLine[i]);
  }  
    return ('The line is currently: '+ newLine.join(', '));
}