  var katzDeliLine= [];
  
function takeANumber(array, customer){
  array.push(customer);
  var welcome = ('Welcome, ' + customer + '. You are number ' + (array.length) + " in line.");
   return welcome;
  
}

function nowServing (array){
  
    if (array[0]=== undefined){
    return('There is nobody waiting to be served!');
    }
   else
  var nextCustomer =('Currently serving ' + array[0] +'.' )
  array.shift();
  return nextCustomer
  return array;
  
}

