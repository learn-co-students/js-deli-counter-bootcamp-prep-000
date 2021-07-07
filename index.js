var katzDeli = [];

function takeANumber(katzDeliLine,name){
    katzDeliLine.push(name);
    for(var i = 0; i<katzDeliLine.length; i++){
        if(katzDeliLine[i] === name){
            return `Welcome, ${katzDeliLine[i]}. You are number ${i+1} in line.`;
        }
    }
}

function nowServing(katzDeliLine){
    if(katzDeliLine.length == 0){
        return "There is nobody waiting to be served!";
    }else{
        var temp = katzDeliLine[0];
        katzDeliLine.shift();
        return `Currently serving ${temp}.`;
    }

}


function currentLine(katzDeliLine){
    var str="";

    if (katzDeliLine.length === 0){
        return "The line is currently empty.";
    }
    else {
      
      for(var i=0; i<katzDeliLine.length; i++){
        str= str + ` ${i+1}. ${katzDeliLine[i]},`;
      }
    } 
    return "The line is currently: "+ str.slice(1,str.length-1);
}
