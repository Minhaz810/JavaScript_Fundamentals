function Person(name,age){
   /*  let this =Object.create(null) //new দিয়ে লিখলে এরকম object create হয়ে যায় */
    this.name=name;
    this.age=age;
    console.log(`${this.name} is ${this.age} years old`)
    /* return this; */
}

var Sakib =new Person("sakib",35)

