 
numbers
Strings
Booleans : true or false
Typeof


alert("You have written: " + chars + ", you have: "+ chars + " left.");


Tweet count example:

var tweet = prompt("Create your tweet: ");
var tweetCount = tweet.length;
alert("You have written: "+ tweetCount +" characters. You have: "+ (140 - tweetCount) +" left to use.");

Slice();


function getMilk(money) {
    
    var numerOfBottles = Math.floor(money / 1.5);
    console.log("buy "+ numerOfBottles +" bottles of milk");

    
}



getMilk(5)





Modules and Math

var output = [];
var count = 1;

function fizzBuzz(){


     if (count % 3 === 0 && count % 5 === 0) {
        output.push("FizzBuzz");
               
     } else if (count % 3 === 0) {
        output.push("Fizz");

     } else if (count % 5 === 0) {
        output.push("Buzz");

     } else {
        output.push(count);
     }

     count++;

     console.log(output);    
}


//WHILE 

function fizzBuzz(){

    while(count <= 50){
              
    if (count % 3 === 0 && count % 5 === 0) {
       output.push("FizzBuzz");
              
    } else if (count % 3 === 0) {
       output.push("Fizz");

    } else if (count % 5 === 0) {
       output.push("Buzz");

    } else {
       output.push(count);
    }

    count++;
    } 

    console.log(output);    
}



//FOR LOOPS

for (var i=1; i<2; i++){
    console.log(i);
}








