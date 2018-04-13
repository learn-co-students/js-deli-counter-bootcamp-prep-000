var katzDeliLine = [];
function takeANumber(array, name){
   array.push(name);
   var num = array.length;
   return `Welcome, ${name}. You are number ${num} in line.`
}

function nowServing(array){
   var servename = array[0];
   if (array.length > 0){
      array.shift();
      return `Currently serving ${servename}.`;
   }
   else return 'There is nobody waiting to be served!';
}

function currentLine(array){
   var newarray = [];
   if(array.length>0){
      for (var i = 0; i < array.length; i++){
         newarray[i] = ` ${i+1}. ` + array[i];
      }
      return `The line is currently:` + newarray;
   }
   else return `The line is currently empty.`;
}

console.log(takeANumber(katzDeliLine, "Ada")); // "Welcome, Ada. You are number 1 in line."
console.log(takeANumber(katzDeliLine, "Grace"));
console.log(takeANumber(katzDeliLine, "Kent"));
console.log(currentLine(katzDeliLine)); // "The line is currently: 1. Ada, 2. Grace, 3. Kent"
console.log(nowServing(katzDeliLine)); // "Currently serving Ada."
console.log(currentLine(katzDeliLine));// "The line is currently: 1. Grace, 2. Kent"
console.log(takeANumber(katzDeliLine, "Matz")); // "3"
console.log(currentLine(katzDeliLine)); // "The line is currently: 1. Grace, 2. Kent, 3. Matz"
console.log(nowServing(katzDeliLine)); // "Currently serving Grace."
console.log(currentLine(katzDeliLine));
console.log(nowServing(katzDeliLine)); // "Currently serving Grace."
console.log(currentLine(katzDeliLine));
console.log(nowServing(katzDeliLine)); // "Currently serving Grace."
console.log(currentLine(katzDeliLine));
