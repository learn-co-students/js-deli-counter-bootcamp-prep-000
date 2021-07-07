//----------function one-----------take a number--------

function takeANumber(katzDeliLine, name){
  
  katzDeliLine.push(name);
 // console.log(katzDeliLine)
 
  return `Welcome, ${name}. You are number ${katzDeliLine.length} in line.`;
}

//function two---------------------now serving--------


function nowServing(katzDeliLine){
  let finAns = '';
if(katzDeliLine.length === 0){
  return "There is nobody waiting to be served!";
}
 else{ finAns = `Currently serving ${katzDeliLine[0]}.`
  katzDeliLine.shift();
 }
  return finAns;
}

//function three-------------------current line--------------

function currentLine(katzDeliLine){
  let finSen = '';
  let nameSen = [];
  let startSen = "The line is currently:";

  if(katzDeliLine.length === 0){
    return "The line is currently empty.";
  }

  for(let i = 0; i <= katzDeliLine.length-1; i++){
 
    nameSen.push(` ${i+1}. ${katzDeliLine[i]},`);

    //console.log(nameSen)

}
  finSen =  startSen + nameSen.join('');
  return finSen.slice(0, finSen.length-1);
}