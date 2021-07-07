var my_deli = [];
function takeANumber(my_deli, new_comer){
  my_deli.push(new_comer);
  return ("Welcome, "+ new_comer+"." + " You are number " + (my_deli.indexOf(new_comer) + 1) + " in line.");
}

function nowServing(my_deli){
var deli_length = my_deli.length;
if(deli_length < 1){
  return "There is nobody waiting to be served!";
}else{
  return "Currently serving " + my_deli.shift()+".";
}
}

function currentLine(my_deli){
  var the_length = my_deli.length;
  var the_response = "The line is currently:";
  if(the_length > 0){
  console.log("Who is in line?");
  for(var j = 0; j < the_length; j++){
    if(j < the_length - 1){
    the_response+= (" "+(j+1)+". "+ my_deli[j] + ",");
  } else{
    the_response+= (" "+(j+1)+". "+ my_deli[j]);
  }
}
  return (the_response);
}else if (the_length === 0){
  return ("The line is currently empty.");
}
}
