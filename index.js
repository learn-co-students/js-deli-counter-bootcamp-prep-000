


function takeANumber(katzDeli, name){

katzDeli.push(name);

return (`Welcome, ${name}. You are number ${katzDeli.length} in line.`);

}

 function nowServing(katzDeli) {
  if (katzDeli.length > 0) {

    return `Currently serving ${katzDeli.shift()}.`;

  } else {
      return (`There is nobody waiting to be served!`);
  }
}




function currentLine(katzDeli){

var line = [];

for (let i = 0; i < katzDeli.length; i++ ){

line.push(`${i+1}. ${katzDeli[i]}`);

} if (katzDeli.length === 0) {
    return `The line is currently empty.`;
  } else {

return `The line is currently: ${line.join(', ')}`};
}//the join() method transfor the array into a string and allow th user to modify the comma and space between the elements
///the join() comand helped me to add a space after the comma and solve the erro in the array
