
var name;
var i = 0;
var katzDeliLine = [];


function takeANumber(katzDeliLine, name )
{
     katzDeliLine.push(name);

     return "Welcome, "+ name + ". You are number "+ katzDeliLine.length + " in line.";
}

function nowServing(katzDeliLine)
{
     var servedCustomer = katzDeliLine.shift();

     if( katzDeliLine.length === 0)
     {
          return "There is nobody waiting to be served!";
     }
     else {
          return "Currently serving "+ servedCustomer +".";
     }
}


function currentLine(katzDeliLine)
{
     if( katzDeliLine.length === 0){
         return "The line is currently empty.";
     }else {

     var some = [];
     var index;

        while( i< katzDeliLine.length)
        {
           index = i + 1;
           some[i] =" "+ index +". "+ katzDeliLine.slice(i,i+1);
           i++;
         }

         return "The line is currently:" + some;
    }
}
