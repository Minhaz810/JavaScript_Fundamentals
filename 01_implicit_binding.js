/* 
1.implicit binding
2.explicit binding
3.new binding
4.window binding 
*/


/* 
var printPlayerName=function(name){
    console.log(name);
}

printPlayerName("Sakib")
 */

/* Implicit Binding */
/* var sakib ={
    name: sakib,
    age: 35,
    printPlayerName:function(){
        console.log(this.name);  //this এখানে sakib object অর্থ্যাৎ sakib এর নামকে চাই আমি।
    }
} */
/* 
var printPlayerName =function(obj){
    obj.printPlayerName=function(){
        console.log(this.name)
    }
}

var sakib={
    name: 'Sakib',
    age: '35'
}

var tamim={
    name: 'Tamim',
    age: 34,
}

printPlayerName(sakib)
printPlayerName(tamim)

sakib.printPlayerName()
 */



var person =function(name,age){
    return{
        name: name,
        age: age,
        printName: function(){
            console.log(this.name)
        },
        father:{
            name: 'Mr. XXX',
            printName: function(){
                console.log(this.name)
            }
        }
    }
}

var sakib =person('Hathuru',35) //person function যেহেতু object return করে,তাই sakib একটা object

sakib.printName()
sakib.father.printName()

/* . এর আগে যা আছে তাই ই this */