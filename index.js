var katzDeliLine=[];
function takeANumber(katzDeliLine, name){
  katzDeliLine.push(name);
  var result = `Welcome, ${name}. You are number ${katzDeliLine.length} in line.`
  return result
}

function nowServing(katzDeliLine){
  if(katzDeliLine.length===0) return "There is nobody waiting to be served!"
  else{
    var temp=katzDeliLine[0];
    katzDeliLine.shift();
    return `Currently serving ${temp}.`


  }
}

function currentLine(katzDeliLine){
  if(katzDeliLine.length===0) return "The line is currently empty."
  else{
    var result="The line is currently: "
    for(var i=0; i<katzDeliLine.length;i++){
      result+=`${i+1}. ${katzDeliLine[i]}, `
    }
    result=result.substring(0,(result.length-2))
    return result;
  }
}
