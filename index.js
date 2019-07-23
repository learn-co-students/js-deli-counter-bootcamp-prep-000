
/*Input an array (deli line) and string (customer name). Add customer name to line. Return message (string) welcoming the person (name) and telling them what number in line they are.*/

function takeANumber(line, name){
  line.push(name);
  const placeInLine = line.length;
  return(`Welcome, ${name}. You are number ${placeInLine} in line.`)
}

/*Input an array (deli line). If there is no one in line (count = zero), return message (string) that nobody is waiting. If there is someone in line (count > zero), return message (string) "currently serving" that person (string) in line, and remove that person from the line (array).*/ 


function nowServing(line){
  if (line.length === 0){
    return(`There is nobody waiting to be served!`);
  } else {
    const name = line.shift();
    return(`Currently serving ${name}.`)
  }
}

/*Input an array (deli line). If there is no one in line (count = zero), return message (string) that the line is empty. If there is someone in line (count > zero), return message (string) that tells them their number in line and their name (string).
*/

function currentLine(line) {
  if (line.length === 0) {
    return `The line is currently empty.`;
  } else {
    let i = 0;
    
    const formattedNames = [];
    while (i < line.length) {
      const placeInLine = i + 1;
      const name = line[i];
      const placeInLineAndName = `${placeInLine}. ${name}`;
      formattedNames.push(placeInLineAndName);
      i++;
    }
    const lineToString = formattedNames.join(`, `);
    return `The line is currently: ${lineToString}`;
  }
}


