var katzDeliLine = [];

function takeANumber(katzDeliLine, name){
        var length;
        katzDeliLine.push(name);
        // Add name to line.
        length = katzDeliLine.length;

        return `Welcome, ${name}. You are number ${length} in line.`;
}

function nowServing(katzDeliLine){
  if(katzDeliLine.length > 0){
    var currentPerson = katzDeliLine[0];
    katzDeliLine.shift();
    return `Currently serving ${currentPerson}.`;
  }else if (katzDeliLine.length === 0){
    return "There is nobody waiting to be served!";
  }
}

function currentLine(katzDeliLine){

  if(katzDeliLine.length === 0){
      return `The line is currently empty.`
  }else{
      var lineCopy = [];
      for (let i = 0; i < katzDeliLine.length; i++){
        // Add each customer to new array
        lineCopy[i] = ` ${i + 1}. ${katzDeliLine[i]}`;
      }


      return `The line is currently: ${lineCopy}`;
  }

}
