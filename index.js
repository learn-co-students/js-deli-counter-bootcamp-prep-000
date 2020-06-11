function takeANumber(line, name){
    line[line.length] = name;
    var message = `Welcome, ${name}. You are number ${line.length} in line.`;
    return message;
}

function nowServing(line){
    if(!line.length)
        return "There is nobody waiting to be served!";
    else{
        var served = line[0];
        line.shift();
        return `Currently serving ${served}.`
    }
}
//The line is currently: 1. Grace, 2. Kent
function currentLine(line){
    if(line.length == 0)
        return "The line is currently empty."
    else{
        var message = "The line is currently: ";

        for(let i = 0; i < line.length; i++){
            if(line.length - 1 === i)
                message += `${i + 1}. ${line[i]}`;
            else
                message += `${i + 1}. ${line[i]}, `
        }
        return message;
    }

}