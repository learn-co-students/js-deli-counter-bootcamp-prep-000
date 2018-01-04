var katzDeli = [];// At the beginning of the day,
 //the deli is empty and is represented by an empty array

function takeANumber(katzDeli, name){
   // accept a line of people and his/her name
   // return position in line
   var position = katzDeli.length + 1;
   katzDeli.push(name);  
   var response = "Welcome, " + name + ". You are number " + position + " in line.";
   return response;
 }
 

function nowServing(katzDeli){
  // If there is nobody in line, it should return "There is nobody waiting to be served!"
   if (0 === katzDeli.length){
     var response = "There is nobody waiting to be served!";
     return response;
   } 
   else { 
 // return the next person in line and then remove them from the line.
     var nextPerson = katzDeli.shift()
     response = "Currently serving " + nextPerson + ".";
     console.log(response);
     return response;
   }
}

function currentLine(deli){
    if(deli.length === 0){
       var response = "The line is currently empty.";
       return response;
    }else{
       var queue = [];
       deli.forEach(function(person, index){
         queue.push((index + 1) + ". " + person);
       });
       response = "The line is currently: " + queue.join(", ");
       return response;
     }
}