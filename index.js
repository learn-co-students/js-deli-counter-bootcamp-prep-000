function takeANumber(katzDeliLine,name){
  var number=katzDeliLine.length + 1;

  katzDeliLine.push(name);
  return `Welcome, ${name}. You are number ${number} in line.`;
}

function nowServing(katzDeliLine){
  if(katzDeliLine.length>0){
    var next=katzDeliLine.shift()
    return `Currently serving ${next}.`
  } else {
    return 'There is nobody waiting to be served!';
  }
}

function currentLine(katzDeliLine){
  if(katzDeliLine.length===0){
    return "The line is currently empty.";
  } else{
    var output= 'The line is currently: ';
      for (var i=0;i<katzDeliLine.length;i++){
        var num=i+1
        var nextInLine= katzDeliLine[i];

        if (i<katzDeliLine.length-1){
        output+= `${num}. ${nextInLine}, `;
        } else {
        output+= `${num}. ${nextInLine}`;
        }
      }
  } return output;
}
