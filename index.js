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
    else { var k;

      for( var n = 0; n < katzDeliLine.length; n++){
          var v =  k += n;

        }return (`"The line is currently: ${v}. ${katzDeliLine[n]}" `)
   }
 }
