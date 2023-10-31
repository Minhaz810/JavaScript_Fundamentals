/* 
var sakib ={
    name:"Sakib",
    age:35,
    printName: function(){
        console.log(this.name)
    }
}

sakib.printName()
 */


var printName= function(v1,v2,v3){
    console.log(`${this.name} is ${v1},${v2} and ${v3}`);
}

var sakib ={
    name:"Sakib",
    age:35,
    
}
var v1= "Handsome";
var v2="All-Rounder";
var v3="Best-Player";

/* sakib.printName()  //কাজ করবে না  */

//explicit call করবো .call(ঐ object টা যাকে দিয়ে আমি function টা কে call করতে চাচ্ছি) কে

/* printName.call(sakib,v1,v2,v3)  //printName function, তুমি sakib কে this হিসেবে use করো   */

/* var v=[v1,v2,v3]

printName.apply(sakib,v); */

var newFunc =printName.bind(sakib,v1,v2,v3)
newFunc()

