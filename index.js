function takeANumber(katzDeli,personName) {

//var katzDeli = [];
var i = katzDeli.length+1;
katzDeli.push(personName);
return `Welcome, ${personName}. You are number ${i} in line.`;
//return `Welcome, ${personName}. You are number ${i} in line`,katzDeli ;
}
function nowServing(katzDeli ) {
  var i = katzDeli.length;
    if (i>=1) {
	var strPerson=katzDeli[0];
        katzDeli.shift();
        return `Currently serving ${strPerson}.`;
      }
    else {
       return "There is nobody waiting to be served!";
    }
 }

 function currentLine(katzDeli) {
   var i = katzDeli.length;
   var strTemp = ``;
   if (i >=1) {
      strTemp = `The line is currently: 1. ${katzDeli[0]},`;
    }
   else {
      strTemp = `The line is currently empty.`;
    }

      if (i>=1) {
        for (var n = 1; n < katzDeli.length-1; n++) {
  	     strTemp = `${strTemp} ${n+1}. ${katzDeli[n]},`;
         }
        strTemp = `${strTemp} ${n+1}. ${katzDeli[n]}`;
       }
   return strTemp;
 }
