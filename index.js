// delicounter lab

function takeANumber(line,name){
  
  line.push(name);   //adding new customer to line
  var position=line.length;
  return `Welcome, ${name}. You are number ${position} in line.`;
}


function nowServing (line) {
  var firstPerson;
  
  if ((line.length)===0)
    return "There is nobody waiting to be served!";
  else {
    firstPerson=line.shift();
    return `Currently serving ${firstPerson}.`;
  }
}



    function currentLine(line){
      var arrayPosition=0;
      var placeInLine;
      var name;
      var newArray=[];
      var aSlice;
      var message="The line is currently: ";
      
      if ((line.length)===0){
      return "The line is currently empty.";
      }   //this part was easy! 
      
  else {
    
    //The first for loop gets the names at each position in line array 
    
     for (arrayPosition=0;arrayPosition<(line.length);arrayPosition++) {
        placeInLine=arrayPosition+1; // because arrays start at 0!
        name=line.slice(arrayPosition,placeInLine);
        placeInLine=placeInLine.toString(); //array must be all strings
        newArray.push(placeInLine +". "+ name);       //combining the line position with spacing text and the name, and building a new array with line position and name together
      }
            
    //This loop goes through the new array and builds the message of who's in line         
            
      for (arrayPosition=0;arrayPosition<(newArray.length);arrayPosition++){
       aSlice=newArray.slice(arrayPosition, arrayPosition+1);
       message =message.concat(aSlice)+", "; //adds the new slice to previous slices
          } 
      message=message.slice(0,-2); //to get rid of last space and comma - seems kind ouf ugly...
      
     return message;
      } //end of else
  }