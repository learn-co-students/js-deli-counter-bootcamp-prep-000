// delicounter lab

function takeANumber(line,name){
  line.push(name);//adding new customer to line
  var position=line.length;
  return `Welcome, ${name}. You are number ${position} in line.`;
}

function nowServing (line) {
  var firstPerson;
  var newArray=[];
  if ((line.length)===0)
    return "There is nobody waiting to be served!";
  else
  {
    firstPerson=line.shift();
    return `Currently serving ${firstPerson}.`;
    }
}


//Notes: can be cleaned up - rename variables to make more sense, ++instead of +1?
    function currentLine(line){
      var position=0;
      var location;
      var stringloc;
      var name;
      var newArray=[];
      var slice1;
      var message="The line is currently: ";
      
      if ((line.length)===0){
      return "The line is currently empty.";
      }
      
      else {
        
     for (position=0;position<(line.length);position++) {
        location=position+1;
        name=line.slice(position,location);
        stringloc=location.toString(); //array must be all strings
        newArray.push(stringloc+". "+ name);//combining the line position with formatting text and the name
        
     }
      for (position=0;position<(newArray.length);position++){
          
       slice1=newArray.slice(position, position+1);
       message =message.concat(slice1)+", "; //adds the slices from array together
      
      
      } 
      message=message.slice(0,-2);//to get rid of last space and comma - seems kind ouf ugly...
      
     return message
     ;
      }
    }