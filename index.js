  var katzDeli = [];
  var num ;


function takeANumber(katzDeli,name){
 num = katzDeli.length;
  katzDeli.push(name);
  num++;
return `Welcome, ${katzDeli[num-1]}. You are number ${num} in line.`;
}

function nowServing(katzDeli){
  if(katzDeli.length===0){
    return "There is nobody waiting to be served!";
  } else{
    var temp = katzDeli[0];
    katzDeli.shift();
  return `Currently serving ${temp}.`;
}
}

function currentLine(katzDeli){
  var newArray=[];
  
  if(katzDeli.length===0){
   return 'The line is currently empty.'; 
  }
  
  
  else{
    
    for(var i = 0;i<katzDeli.length;i++){
      newArray[i] = ` ${i+1}. ${katzDeli[i]}`;
      }
    return `The line is currently:${newArray}`;
  }

}
