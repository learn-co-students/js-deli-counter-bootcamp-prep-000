


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

var line = []; ///i prefered to use and array over a string becasue i thinks is a batter way to display the line of people

for (let i = 0; i < katzDeli.length; i++ ){ ///allow us to iliterate thorught the katzDeli and push into the line var the element


line.push(`${i+1}. ${katzDeli[i]}`);

} if (katzDeli.length === 0) {
    return `The line is currently empty.`;
  } else {

return `The line is currently: ${line.join(', ')}`};
}//the join() method transfor the array into a string and allow th user to modify the comma and space between the elements
///the join() comand helped me to add a space after the comma and solve the erro in the array
