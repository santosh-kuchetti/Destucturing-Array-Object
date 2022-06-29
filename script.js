//  Array/Object destructuring

const alphabet = ['A', 'B', 'C', 'D', 'E', 'F'];
const numbers = ['1', '2', '3', '4', '5', '6'];

/*
    to access the elements in the alphabet,
    const a = alphabet[0]
    const b = alphabet[1]

    console.log(a) --> output is  A
    console.log(b) --> output is  B

*/

// we can actully access them pretty easily by destructuring

// Array Destructuring

/*

    const[a, b] = alphabet;

    now if we console the a,b

    console.log(a)  --> output is  A
    console.log(b)  --> output is  B

*/

/*

    what if we want to access 'D' directly 

    const[a, b,,d] = alphabet;

    console.log(d)  -->  output is  D



    to access remaining elements we can use Spread operator

    const[a, b,,d, ...other] = alphabet;

    console.log(other)  -->   output is it gives an array of elements  ['E','F']


*/


// we can concatinate the two arrays using spread operators

/* 

    const newArray = [...alphabet, ...numbers];

    console.log(newArray)   --> output is  ['A', 'B', 'C', 'D', 'E', 'F', '1', '2', '3', '4', '5', '6']


    aplhabet.concat(numbers)  -->  this also gives the same output as above

*/


//  destructuring in functions

function sumAndMultyiply(a, b) {
    return [a+b, a*b];
}

const array = sumAndMultyiply(2, 3);

/*

    the array will be [5 , 6]

*/

/*

    to get the invividual elements we can destructure it

    

    console.log(sum)   -->  output is 5
    console.log(multiply)   -->   output is 6


    in the destructuring we can set the default values also

    to set default values,

    const [sum, multiply, divide='no division'] = sumAndMultyiply(2, 3);

    console.log(divide)  -->  since there is no such element in the array, it will give the output as   no division

*/


//  Object destructuring

const person1 = {
    name: 'santosh',
    age: 22,
    address: {
        city: Santhabommali,
        state: 'Andra Pradesh'
    }

}


/*

    this is very much similar to the array destucturing

    const{ name, age} = person1;

    name, age   should match the keys in the object

    console.log(name)   -->  output is santosh
    console.log(age)    -->  output is 22


    and  in any case if we want to use different name instead of the key name, we should add ":"  after our name


    const{firstName: name, age} = person1;

    console.log(firstName)   -->  output is santosh.

*/



// we can actully join two or more objects

const person2 = {
    name: devi,
    age: 27
}

/*

    const person3 = {...person1, ...person2};

    we are using spread operator to join all the properties in the objects

    now by doing this,  any common propeties in the objects will be overrided.

    since person1 and person2 having common  properties  name and age ,  when we we join person2 to person1,  person1 properties will be overrided by the person2 properties.
      

*/


//  most usefull in functions

function printUser(user) {
    console.log(`${user.name} and ${user.age} `);
}

printUser(person2);

/*

    to access the properties we use user.name and user.age

    but we easily acces by destrucuring them

    function printUser({name,age}) {
        console.log(`${name} and ${age} `);
    }

    by destructuring in the arguments we only get the required properties from the user

    now we can directly access the properties by their name


*/
