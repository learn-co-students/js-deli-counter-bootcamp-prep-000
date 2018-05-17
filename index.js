function takeANumber(katzDeliLine, name){
    katzDeliLine.push(name);
  return 'Welcome, '+ name  + '. You are number '+ katzDeliLine.length  +  ' in line.';
  
}

function nowServing(array){
  
  if(array.length > 0){
    var firstName =array.shift();
    return 'Currently serving ' + firstName + '.' ;
  }else return 'There is nobody waiting to be served!';
  
}

function currentLine(katzDeliLine){
  
  if (katzDeliLine.length > 0){
    var array = []
    for(var i=0; i < katzDeliLine.length; i++){
       var num = i+ 1
      array.push(" " +num +'. '+ katzDeliLine[i])}
      return 'The line is currently:'+ array
    
  }else return 'The line is currently empty.'
}