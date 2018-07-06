var katzDeliLine = [];

function takeANumber (katzDeliLine, name){
    katzDeliLine.push(name);
    return `Welcome, ${name}. You are number ${katzDeliLine.length} in line.`;
}

//usar o shift no nowServing

function nowServing(){
  if (katzDeliLine.length>=1){
    return `Currently serving ${katzDeliLine.shift()}`;
  }
  else
    return `There is nobody waiting to be served!`;
}


return `The line is currently: ${i+1}. ${katzDeliLine[i]}`;


/*function currentLine(katzDeliLine){
var listinha = [];
  if (katzDeliLine.length===0){
    for (var i=0;i<katzDeliLine.length;i++){
      if (i===0){
        listinha[i] = `${i+1}. ${katzDeliLine[i]}`;
      }
      else {
        listinha[i] = `${i+1}. ${katzDeliLine[i]}`;
      }
    return `The line is currently: ${listinha}`
    }
  }
      else{
         ` ${i+1}. ${katzDeliLine[i]}`;
      }
    return `The line is currently empty.`;
}*/