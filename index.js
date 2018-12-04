function takeANumber(line, name) {
        line.push(name);
        var position = line.indexOf(name);
        console.log('Welcome ' + name,  'you are number', position + 1, 'in line.') ;
} // end function takeANumber


function nowServing(line) {
        console.log('Now Serving: ' + line[0]);

} // end of function nowServing


function currentLine(line) {
        for(var x =0; x <= line.length; x++) {
                console.log('Current line:', x + 1,'- '+ line[x]);
        }
} // end of function currentLine

var deliLine = [];

takeANumber(deliLine, 'chris');
takeANumber(deliLine, 'Jess');
takeANumber(deliLine, 'Morgan');
console.log(deliLine);
nowServing(deliLine);
currentLine(deliLine);





