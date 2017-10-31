var katzDeli = [];

function takeANumber(katzDeliLine, customerName){
  katzDeliLine.push(customerName);
  return `Welcome, ${customerName}. You are number ${katzDeliLine.length} in line.`
}

function nowServing(customerList){
  if(customerList.length > 0){
    var next = customerList[0];
    customerList.shift();
    return `Currently serving ${next}.`;

  } else {
    return 'There is nobody waiting to be served!';
  }
}


function currentLine(array){
  if(array.length === 0){
    return 'The line is currently empty.';
  }

  else{
    var counter = 0;
    var message = 'The line is currently: ';

    for(let i = 0; i < array.length; ++i){
      counter = i +1;
      if(i === array.length - 1){
        message += `${counter}. ${array[i]}`;
      }
      else{
        message += `${counter}. ${array[i]}, `;
      }
    }

    return message;
  }
}
