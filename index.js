var katzDeli = [];
function takeANumber(katzDeli, name){
    katzDeli.push(name);
    return `Welcome, ${name}. You are number ${katzDeli.length} in line.`;
}
function nowServing(array){
  if (array.length <= 0){
    return 'There is nobody waiting to be served!';
  } else {
    var serving = `Currently serving ${array[0]}.`
    array.shift()
    return serving
    }
}
function currentLine(line){
  var inLine, comma;
  if (line.length === 0){
    return 'The line is currently empty.';
  } else if (line.length > 0 ){
    inLine = `The line is currently: `;
    for (var i = 0 ; i < line.length; i ++){
        if(line[i] === line[line.length - 1]){
          comma = '';
        } else {
          comma = ', ';
        }
        inLine += `${i + 1}. ${line[i]}${comma}`;
    }
    return inLine;
  }
}
