var katzDeliLine = []; 
function takeANumber(line, name) { line.push(`${name}`); return(`Welcome, ${name}. You are number ${line.length} in line.`); }
function nowServing(line) { let i = 0; while ( i < line.length) {i++;} if ( line.length === 0) { return "There is nobody waiting to be served!"; } else return( 'Currently serving  ${line.shift()}.' ); }
var array = [];
function currentLine(line) { let i = 0; while ( i < line.length ); { array.push( '${name}' + [ i + 1] + '. '  + line[i] ); i++; } if ( line.length === 0) { return "The line is currently empty."; } else return('The line is currently:' + line ); }
function currentLine(katzDeli) { for (let i = 0; i < katzDeli.length; i++) { line.push(` `+[i+1]+`. `  + katzDeli[i]) } if (katzDeli.length === 0) { return "The line is currently empty."; } else return(`The line is currently:` + line); }