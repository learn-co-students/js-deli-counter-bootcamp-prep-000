var katzDeli = [];

function currentLine(line){
 if(!line.length){
   return "The line is currently empty."
 }
 var numberAndName=[];
 for(var i=0;i<line.length;i++){
   numberAndName.push(i+1+'. '+line[i]);
 }
  console.log("The line is currently: "+numberAndName)
  return "The line is currently: "+numberAndName.join(', ');

}


function takeANumber(line,name){
  line.push(name);
  console.log('Welcome, ' + name + '. You are number '+ line.length +' in line.')
  return 'Welcome, ' + name + '. You are number '+ line.length +' in line.'
}

function nowServing(line){
  if(!line.length){
    console.log("There is nobody waiting to be served!")
    return "There is nobody waiting to be served!"
  }else{
    return "Currently serving " + line.shift() +".";
  }
}
