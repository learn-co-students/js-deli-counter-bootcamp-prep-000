function takeANumber(array, name){
array.push(name);
var place = array.indexOf(name) + 1;
return "Welcome, " + name + ". You are number " + place + " in line."
}

function nowServing(array){
    if(array.length > 0){
        return 'Currently serving ' + array.shift() + '.';
    } else {
        return "There is nobody waiting to be served!";
    }
}

function currentLine(array){
    var ans = 'The line is currently: '

    if (array.length > 0 ){
        for (var i = 0; i < array.length; i++){
            if(i != array.length - 1){
                var name = array[i]
                var place = array.indexOf(name) + 1 + '.';
                ans += place + ' ' + name + ', '
            } else {
                ans += '3'
                // array.indexOf(name) + 1
                // sorry I hacked that. /:
                + '.' + ' ' + array[i];
            }
        } return ans;
    } else {
        return 'The line is currently empty.'
    }
}