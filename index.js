


function takeANumber(katzDeli, name){

katzDeli.push(`${name}`);

return (`Welcome, ${name}. You are number ${katzDeli.length} in line.`);

}

 function nowServing(katzDeli) {
  if (katzDeli.length > 0) {

    return `Currently serving ${katzDeli.shift()}.`;

  } else {
      return (`There is nobody waiting to be served!`);
  }
}




function currentLine(katzDeli,line){

  var i = 0;

var line = [];

   while (katzDeli.length > 0){

  line.push(`The current line is:` + [i+1] + ' ' + `${katzDeli[i]},`) ;
 i++;

  } if (katzDeli.length === 0){
    return `The line is currently empty.`;
  }


}
