// expect(takeANumber(katzDeli, 'Ada')).toEqual("Welcome, Ada. You are number 1 in line.");

function takeANumber(katzDeliLine,name) {
  katzDeliLine.push(name)
  return `Welcome, ${name}. You are number ${katzDeliLine.length} in line.`
}
//return `Welcome,${}. You are number ${katDeliLine.length} in line.


function nowServing(line){
if (line.length === 0 ){
return  "There is nobody waiting to be served!";
  }else {
   var currentCustomer= line[0] ;
   line.shift();
   return`Currently serving ${currentCustomer}.`
  }
}

//for loop method; While Loop unneeded since not dependent on a dynamic value
function currentLine(line){
 if (line.length === 0){
    return "The line is currently empty.";
  }else {
let statement = "The line is currently:"
    for(var i=0;i<(line.length);i++) {
statement= statement + " "  + [i+1] + "." + " " + line[i] + "," 
    
    }
statement=statement.slice(0,-1);
return statement
  }
}