
function takeANumber(katzDeliLine, name){

    katzDeliLine.push(name);

    return `Welcome, ${name}. You are number ${katzDeliLine.length} in line.`;
}

function nowServing(name){

if(name.length < 1){
return "There is nobody waiting to be served!"
}
else if(name.length > 1 ){

  return `Currently serving ${name.shift()}.`
}


}

function currentLine(line){
  if(line < 1){
    return "The line is currently empty."
  } else{
    var newArray=[];
    var result = "The line is currently: ";
    for(var i = 0; i < line.length; i++){
      newArray.push((i + 1) + ". " + line[i])

    }
    return result += newArray.join(", ");
  }
}
//I am at a complete lost as to how to make my number print out
