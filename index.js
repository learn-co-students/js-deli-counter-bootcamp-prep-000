var katzDeli =[];


function takeANumber(katzDeliLine,name){

   katzDeliLine.push(name);

   return `Welcome, ${name}. You are number ${katzDeliLine.length} in line.`;
}


function nowServing(katzDeliLine){

   if(katzDeliLine.length ==0)
      return "There is nobody waiting to be served!";

   else{

      var ret = "Currently serving " +katzDeliLine[0] +".";
      katzDeliLine.shift();
      return ret;
   }

}


function currentLine(line){

  var theLine = "The line is currently: ";
  if(line==0)
     return "The line is currently empty.";

  else{
     for(var i=0; i<line.length-1;i++){

         theLine += `${(i+1)}. ${line[i]}, `;
     }

     theLine+= `${(i+1)}. ${line[i]}`;
  }

  return theLine;
}
