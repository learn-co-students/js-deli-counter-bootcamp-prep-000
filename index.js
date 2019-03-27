function takeANumber(string,name) {string.push(name); return 'Welcome, ' + string.slice(-1) + '. You are number ' + ( string.length) + ' in line.'}
function nowServing(katzDeliLine) {if (katzDeliLine.length >0) {var hold = katzDeliLine[0]; katzDeliLine.shift(); return 'Currently serving ' + hold + ".";} else {return 'There is nobody waiting to be served!'} }
function currentLine(line) {if (line.length >0) {var i = 0; while (i<line.length); return 'The line is currently:' + i + ". " + line;} else {return 'The line is currently empty.'}}  
