var katzDeli = [];
function takeANumber(katzDeli, name){
  katzDeli.push(name);
  return `Welcome, ` + name + '. You are number '+katzDeli.length + ' in line.'
}

function nowServing(katzDeli){
  if(katzDeli.length === 0){
   
    return "There is nobody waiting to be served!"
  }
  
  else {
    
    var current = katzDeli[0]
    katzDeli.shift();
    return 'Currently serving ' + current +'.';
    
  }
}

function currentLine(katzDeli){
  if(katzDeli.length === 0){
    return "The line is currently empty."
  }
  
  else{
    var katzDeliNew = []
    for(var n=0; n<=katzDeli.length-1; n++){
    katzDeliNew.push(n+1 + `. ` +katzDeli[n])  
    }
    var katzString = katzDeliNew.join(', ')
    return `The line is currently: ` + katzString; 
  }
}