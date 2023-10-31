/* block comment shift+alt+A */



/*
আমাদের closure.js file টা হচ্ছে parent
*/

/*-------------------------------------------------------------------------------- */

/*
এবার আমি একটা function create করি,যেটা দুটো number এর যোগ করে দেয়
*/

/*
var sum=function(num1,num2){
    return num1+num2;
}
console.log(sum(2,3))

*/

/*-------------------------------------------------------------------------------- */

/* 
//এখন যদি আমি এটাকে এভাবে লিখি
var num1=5;
var num2=6;

var sum=function(){
    return num1+num2;
}
console.log(sum())

//code কাজ করবে,কারণ sum function টা closure.js এর একটা child;
//chid এ তার parent এর সকল কিছুর access থাকে
 */
/* -------------------------------------------------------------------------------- */




/* 
var child=function(){
    var message="hello,I am a child"
    return message
}
console.log(child())
console.log(message) //error পাবো,কারণ child এর কোনো কিছুতে parent এর access নাই।

 */

/*-------------------------------------------------------------------------------- */


/* অর্থ্যাৎ একটা function তার parent এর ভেতর যেই যেই variable use করা 
হয়েছে তাদেরকে নিজের মধ্যে use করার জন্য function টা তার নিজের parent,
even parent এর parent even তার parent কে close করে রাখে,এই ব্যাপারটাই হচ্ছে closure */

/*-------------------------------------------------------------------------------- */


/* 
var num1=3;
var num2=5;

var sum=function(){
    return function(){
        num1+num2
    }
}

var myFunction=sum() //sum যেই ফাংশনটাকে return করে সেটাই myFucntion
console.dir(myFunction) //myFunction টাও global কে ধরে রাখবে, কারণ global তার Parent এর Parent
 */


/*-------------------------------------------------------------------------------- */


/* 
var num1=3;
var sum=function(){
    var num2=5;  //এটা এখন আমাদের closure এর মধ্যে ঢুকে গেলো,অর্থ্যাৎ সে একটা function এর ভেতর closed
    return function(){
        num1+num2
    }
}

var myFunction=sum()
console.dir(myFunction)

অর্থ্যাৎ closure হচ্ছে একটা fucntion with remembered values
 */

/*-------------------------------------------------------------------------------- */

// closure এর মাধ্যমে বাইরের private property কে secure করে যায়
/* function bankAccount(bankBalance){
    var balance=bankBalance
    return function(){
        return balance
    }
}

var account= bankAccount(100000)
console.dir(account) 
//directly balance variable কে access করতে পারবো না কারণ balance variable 
//হচ্ছে account এর closure property

console.log(account()) //চাইলেই কিন্তু Directly আমরা balance কে access করতে পারবো না,account() call করে করতে হবে
  */

/*-------------------------------------------------------------------------------- */

/* 
var num1=3;
var sum=function(){
    var num2=5;  
    return function(){
        num1; //num2 কে আনলামই না
    }
}

var myFunction=sum()
console.dir(myFunction) //closure গায়েব হয়ে যাবে
//কারণ এখানে myfucntion এর শুধু global scope এর variable দরকার পড়ছে
//অর্থ্যাৎ closure সবকিছুকে নিজের মধ্যে রাখে না
//global scope এর সবকিছুই সে রাখে
 */

/*-------------------------------------------------------------------------------- */

//lws : ২০ মিনিট থেকে ২৪ মিনিটে সবচাইতে ভালো ব্যাখা

//closure এর ভেতর কিন্তু variable এর exact value গুলো থাকে না,বরং reference থাকে

(function(){
    var num1=2
    var num2=3

    var sum=function(){
        return num1+num2
    }
    console.log(sum())
    console.dir(sum) //num1 আর num2 কে পরবর্তীতে change করলে sum এর closure এর reference change হয়ে যাবে

    num1=6; //num1 variavble এর reference change হয়ে গেছে
    num2=5; //num1 variavble এর reference change হয়ে গেছে

    console.log(sum())
    console.dir(sum)
}
)()