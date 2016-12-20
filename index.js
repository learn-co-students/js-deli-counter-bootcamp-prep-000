var katzDeli=[]


function takeANumber(katzDeliLine,name){

    katzDeliLine.push(name)

    var y = `Welcome, ${name}. You are number ${katzDeliLine.indexOf(name)+ 1} in line.`;

    return y;
}
function nowServing(katzDeliLine){
    if(katzDeliLine.length >0){

        return `Currently serving ${katzDeliLine.shift()}.`;
            }
    else{
        return "There is nobody waiting to be served!";
        }
}

function currentLine(line){
    if(line.length<1){
        return 'The line is currently empty.'
    }
    else{
        var current=[]
        for(var i=0; i<line.length; i++){
            current.push(" "+(i+1)+'. '+ line[i]);

        }
        return "The line is currently:"+ current;
    }
}
