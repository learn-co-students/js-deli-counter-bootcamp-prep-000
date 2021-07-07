 var katzDeli = [];
 
 function takeANumber(katzDeliLine, customer){
    katzDeliLine.push(customer);
    // katzDeli.push(customer);
    var line = katzDeliLine.length;
  
    return `Welcome, ${customer}. You are number ${line} in line.`;
  
 }
 
 
 function nowServing(deliLine){
    if(deliLine.length > 0){
      var serving = deliLine.shift();
      return `Currently serving ${serving}.`;
   } else{
      return 'There is nobody waiting to be served!';
   }
 }
 
 
 function currentLine(katzDeliLine){
   var inLine = 'The line is currently: ';
   if(katzDeliLine<=0) {
  return 'The line is currently empty.';
   } else{
   for(var i = 0; i<katzDeliLine.length; i++){
     inLine+= `${i+1}. ${katzDeliLine[i]}, `;
   }
   return inLine.slice(0,-2);
   }
 }