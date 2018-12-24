
function takeANumber(currentLine,name) {
  //const katzDeliLine =[currentLine];
  currentLine.push(name);
  let n=currentLine.length;
  for(let j=n;j>=n;j++){
    for(let i=n;i>=n;i--){
         return (`Welcome, ${currentLine[j-1]}. You are number ${i} in line.`);
    }
      }
}
/*function nowServing(katzDeliLine){
    let n= katzDeliLine.length;
    //const temp=[katzDeliLine];
    
        for (let i=0;i<=n;i++) {
        return "`Currently serving ${katzDeliLine[i]}.`";
         }
     katzDeliLine.push();
     if (katzDeliLine===[])
       {
          return `There is nobody waiting to be served!`;
         }
}*/
function nowServing(katzDeli) {
  if (katzDeli.length > 0) {
    var nowServing = katzDeli[0];
    katzDeli.shift();
    return `Currently serving ${nowServing}.`;
  } else {
    return `There is nobody waiting to be served!`;
  }
}

function currentLine(katzDeliLine){
  let n=katzDeliLine.length;
  if(n===0)
  {
    return "The line is currently empty."; 
  }
  
  else{
     var array = [];
    for (var i = 0; i < n; i++) {
      array.push(` ${i+1}. ${katzDeliLine[i]}`);
    }
    return `The line is currently:` + array;
    
  }
  
}