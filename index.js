var katzDeli=[];

function takeANumber (katzDeli, newCustomer){
  katzDeli.push(newCustomer);
  return 'Welcome, ' +newCustomer+ '. You are number ' +katzDeli.length + ' in line.';
  
}

function nowServing(katzDeli){
  if(katzDeli.length===0){
    return "There is nobody waiting to be served!";
  }
  else {
  return 'Currently serving ' + katzDeli.shift()+ '.';
  }
}

function currentLine(katzDeli){
  if (katzDeli.length===0){
    return "The line is currently empty.";
  }
  else {
  var results = [];
  for(var i=0; i<katzDeli.length; i++){
    results. push(parseInt([i])+1+'. '+katzDeli[i]);
  }
  
  return "The line is currently: "+ results.join(', ');
}}