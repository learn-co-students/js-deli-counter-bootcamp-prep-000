var katzDeli = [];

function takeANumber(katzDeliLine, name) {
  var pos = 0;//position in line

  katzDeliLine.push(name);//put new name in back of line

  for(let i = 0; i <= katzDeliLine.length; i++){
      if(name === katzDeliLine[i]){
      pos = i + 1;
    }//let pos = position in line
    }

  return `Welcome, ${name}. You are number ${pos} in line.`;

}

function nowServing(katzDeliLine) {
var n = 0;

    if (n < katzDeliLine.length){
      return `Currently serving ${katzDeliLine.shift()}.`;
    }//use template literal to include .shift()
  else {
    return "There is nobody waiting to be served!";
  }//true when array is empty
  }
  
  function currentLine(line) {
  var countLine = [];//array holds counted line, ie. 1.Bill
    if(line.length === 0){
      return "The line is currently empty.";//return if line is empty
    }
    else{
      var i = 0;
      while(i < line.length)
        {
            countLine.push( ` ${i+1}. ${line[i]}` );
            (i++);
        }//could probably also use for loop, 
       
      return `The line is currently:${countLine}`;
    }
  }
  
