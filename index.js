var katzDeli=[];

function takeANumber(katzDeliLine,name){

katzDeliLine.push(name);
return `Welcome, ${katzDeliLine[katzDeliLine.length-1]}. You are number ${katzDeliLine.length} in line.`;


}

function nowServing(katzDeliLine){

if(katzDeliLine.length!==0){
return `Currently serving ${katzDeliLine.shift()}.`;
}
return `There is nobody waiting to be served!`;

}

function currentLine(line){
  let li= `The line is currently:`
  if(line.length==0){

    return "The line is currently empty.";
  }

for (let i=0;i<line.length;i++){


  if(i<(line.length-1))
  {
    li+=` ${i+1}. ${line[i]},`;
  }else if(i==(line.length-1))
  {
      li+=` ${i+1}. ${line[i]}`;
  }


}
return li;
}
