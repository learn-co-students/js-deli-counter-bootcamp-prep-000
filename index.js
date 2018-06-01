var katzDeliLine = [] ;

function takeANumber(katzDeliLine,name){
  
  katzDeliLine.push(name);
  
  return ('Welcome, ' + name +'.' + ' You are number ' + katzDeliLine.length + ' in line.') 
  
}


function nowServing(katzDeliLine,personInLine){
  
  
  if (katzDeliLine.length === 0) {
    
      return 'There is nobody waiting to be served!';
    
  }else{
  
  
   
   var customerAtFront = katzDeliLine.shift();
    
    return 'Currently serving ' + customerAtFront + '.'
  
  }
}



function currentLine(katzDeliLine){
  
  var Line = []
  
  if (katzDeliLine.length === 0){
    
      return ("The line is currently empty.")    
    
    
  }else{
    
    for (let i = 0; i <katzDeliLine.length ;i++){
      Line.push( `${i+1}. ${katzDeliLine[i]}` )
    }
    
    return `The line is currently: ${ Line.join(', ') }`
    
  }
  
}
