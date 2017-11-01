function takeANumber(lineNum, name){
   lineNum.push(name);
   return `Welcome, ${name}. You are number ${lineNum.length} in line.`
 };

 function nowServing(lineNum){
   if(!lineNum.length){
     return "There is nobody waiting to be served!"
   }else{
     return `Currently serving ${lineNum.shift()}.`
   }
 };

 function currentLine(katzDeliLine){
   //if(katzDeliLine.length == 0
     if(!katzDeliLine.length){
       return "The line is currently empty."
     }
       const numName = []

       for(let i = 0, line = katzDeliLine.length; i < line; i++){
         numName.push(`${i + 1}. ${katzDeliLine[i]}`)
     }
       return `The line is currently: ${numName.join(', ')}`
 };
