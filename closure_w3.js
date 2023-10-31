// A closure is a function having access to the parent scope, even after the parent function has closed.


/* 
=>Global and local variables with the same name are different variables. 
Modifying one, does not modify the other.

=>Variables created without a declaration keyword (var, let, or const) are always global, 
even if they are created inside a function.

=>Variable Lifetime:
Global variables live until the page is discarded(no longer useful or desirable), like when you navigate to another 
page or close the window.Local variables have short lives. They are created when the 
function is invoked, and deleted when the function is finished.
 */


/* 
//The counter Dillema
let counter=0;
function add(){
    counter+=1;
}
add()
add()
add()

console.log(counter)
/* 
There is a problem with the solution above: 
Any code on the page can change the counter, without calling add().
*/

/* 
//like:
counter+=2
console.log(counter)  //changed 
*/



/* 
The counter should be local to the add() function, 
to prevent other code from changing it:
 */


/* 
let counter =0;



function add(){
    let counter=0;
    counter+=1;
}

add()
add()
add()

console.log(counter) //expected 3.but will get 0;
//It did not work because we display the global counter instead of the local counter.
 */


/*We can remove the global counter and access the local counter by 
letting the function return it:*/

/* 
function add(){
    let counter=0;
    counter+=1;
    return counter;
}

add()
add()
add()

console.log(counter) //expected 3,but output 1
// It did not work because we reset the local counter every time we call the function.

 */

/* 
// JavaScript Nested Functions

function add(){
    let counter=0;
    function plus(){
        counter+=1
    }
    plus()
    plus()
    plus()
    console.log(counter)
}

//if we call the add function the plus function is automatically 
//being called as it is inside it.

add() //counter will be 3 as we called the plus() fucntion inside the add() function 3 times


//we cannot reach the plus() fucntion from outside
 */

//the self-invoking function

const add =(function(){
    let counter=0;
    return function(){
        counter+=1
        console.log(counter)
    }
})()

add()
add()
add()

//Example Explained
// The variable add is assigned to the return value of a self-invoking function.

// The self-invoking function only runs once. It sets the counter to zero (0), and returns a function expression.

// This way add becomes a function. The "wonderful" part is that it can access the counter in the parent scope.

// This is called a JavaScript closure. It makes it possible for a function to have "private" variables.

// The counter is protected by the scope of the anonymous function, and can only be changed using the add function.