  var indexP; // index od the new person in the line 
  function takeANumber(currentLine, newPersoneName)
  {
    // add new customer to the end of the array 
    currentLine.push(newPersoneName)
    indexP = currentLine.length;
    
    //"Welcome, new customer."
    return `Welcome, ${newPersoneName}. You are number ${indexP} in line.`;
  }
  
  
  function nowServing(currentLine)
     {
       var firstElement;
       
       if (currentLine.length>0)
       {
         firstElement = currentLine.shift();
         return `Currently serving ${firstElement}.`;
       }
     
      return `There is nobody waiting to be served!`;
     }
     
     function  currentLine(line)
    {
      var lineLength = line.length;
      if (lineLength > 0)
      {
        var emptArr= [];
        var index = 0
        var tempR;
        var empt = " ";
        for (var i = 0; i< lineLength; i++)
        {
          tempR = i+1+". " +line[i]
          emptArr.push(tempR)
        } 
       
        return `The line is currently: ${emptArr.join(', ')}`;  
      }
      else {
        return `The line is currently empty.` 
      }
  }