var katzDeli= [];

function takeANumber(katzDeli,name){
  katzDeli.push(name);
  var a = (katzDeli.indexOf(name)+1)
  return (`Welcome, ${name}. You are number ${a} in line.`)
}

function nowServing(line){
  if (line.length>=1){
    var now = line[0]
    line = line.shift();
    return (`Currently serving ${now}.`);
  } else {
    return (`There is nobody waiting to be served!`)
  };
};

function currentLine(line){
  var inline = [];
  if (line.length>=1){
    for (var i = 0; i <line.length;i++) {
    var n = parseInt(i)+1;
    inline.push(` ${n}. ${line[i]}`);
  }//end of for loop
  console.log(inline)
  return (`The line is currently:${inline}`)
}//ends if statement
else{
  return ("The line is currently empty.")
}// ends else statement
} // closes function
