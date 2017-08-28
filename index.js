  var katzDeliLine = [];

  function takeANumber(katzDeliLine, name){
    var placeholder = katzDeliLine.push(name)
    return "Welcome, " + name + ". You are number " + placeholder + " in line."
  }

  function nowServing (person){
    if( person.length === 0 ){
      return "There is nobody waiting to be served!"
    } else {
      var personToBeDeleted = person.shift();
      return "Currently serving " + personToBeDeleted + "."
    }
  }



   function currentLine(katzDeliLine) {
     var line = [];
     for (let i = 0; i < katzDeliLine.length; i++) {
       line.push(" " +[i+1]+". "  + katzDeliLine[i])
    }
     if (katzDeliLine.length === 0) {
        return "The line is currently empty.";
     } else{
         return("The line is currently:" + line);
     }
   }
