

var katzDeli = [];

function takeANumber(katzDeliLine, name) {

  katzDeliLine.push(`${name}`);
  return `Welcome, ${name}. You are number ${katzDeliLine.length} in line.`
     }

     function nowServing (katzDeliLine,name) {
       if (katzDeliLine.length===0){
       return "There is nobody waiting to be served!";

     }
     else {
      var next = katzDeliLine.shift();
      return "Currently serving " + next +".";
     }
   }



    function currentLine (line) {

     if (line.length===0){
       return "The line is currently empty."
     }
     else {
          var array =[];
         for (var i =0; line.length >i; i++){

         array.push(`${[i+1]}. ` +  line[i]);

     }
return "The line is currently: " +  array.join(', ');

}

   }
