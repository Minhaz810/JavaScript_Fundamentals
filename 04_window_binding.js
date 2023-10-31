"use strict"
var printName=function(){
    console.log(this.name); 
}

var sakib ={
    name: 'Sakib',
}

printName()  //undefined,not an error  কারণ this এখানে windows  কে point করে।