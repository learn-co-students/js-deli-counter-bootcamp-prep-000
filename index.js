var katzDeli = [];
function takeANumber(katzDeli, name) {
   katzDeli.push(`${name}`);
 return(`Welcome, ${name}. You are number ${katzDeli.length} in line.`);
 }
 function nowServing(katzDeli){
      if (katzDeli.length == 0){
     return ("There is nobody waiting to be served!")
    }
    else { var k = katzDeli.shift();

    return `Currently serving ${k}.` ;
    }
  }

  function currentLine(katzDeliLine){

    if(katzDeliLine.length == 0){
      return  "The line is currently empty.";
      }
    else { var n;

      for(n = 0; n < katzDeliLine.length; n++){
          var k = n + 1;
         console.log (`"The line is currently: ${k}. ${katzDeliLine[n]}" `);
         }
   }
 }
