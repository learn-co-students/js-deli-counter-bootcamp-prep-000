var katzDeli = [];
var otherDeli = ["Steven", "Blake", "Avi"];

function takeANumber(array1, name){
  array1.push(name);
  return "Welcome, "+ name +". You are number "+array1.length+" in line.";
}

console.log(takeANumber(katzDeli, "Ada"));
console.log(takeANumber(otherDeli, "Grace"));

function nowServing(array2){
  if(array2.length === 0){
    return "There is nobody waiting to be served!";
  } else{
    var na = array2[0];
    array2.shift();    
    return "Currently serving " + na +".";
  }
}

console.log(nowServing(katzDeli));
console.log(nowServing(otherDeli));

function currentLine(array3){
  if(array3.length ===0){
    return "The line is currently empty.";
  } else{
    var a = "The line is currently: "  
    for(var i=0; i<array3.length; i++){
      a = a + (i+1) +". "+ array3[i]+ (i==array3.length-1 ? "" : ", ");
    }
    return a;
  }
}

console.log(currentLine(katzDeli));
console.log(currentLine(otherDeli));

