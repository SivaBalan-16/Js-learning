// Creating Array & array is type of Obj
// an array is a list of value, we can access uisng Index value and indexing always starts at 0
// let cars = ['Benzs' , "Volvo", "Audi", "BMW"];
// console.log(typeof (cars));

// -----------------------------------------------------------------//

// Craeting Array with const 
// We Can't change the refence ,but We can edit the elements of the Array


// const cars = ['Benzs' , "Volvo", "Audi", "BMW"];
// let Myfav= cars.slice(-4);
// console.log(Myfav)

// -----------------------------------------------------------------//
//Js array methods 

// push(), pop(), shift(), unshift()

// slice(), splice()

// forEach(), map()

// filter(), find(), includes()

// sort(), reverse() 


const fruit =['banana','apple','orange','pinapple'] 
//push
//this method add element in to the end of the array
// fruit.push('mango')


//pop
// this method pop or remove the end element in the array
// let removed = fruit.pop()
// console.log(fruit)
// console.log(removed)

//shift
// this method remove the end element in the array
// let Shift =fruit.shift()
// console.log(Shift)
// console.log(fruit)

//unshift
//this method add the new element to the beginning of an arry 
// its return the lenght of an array when we console
// let Unshift = fruit.unshift('Vaalaipalam')
// console.log(Unshift)

//slice()
//this methode returns the selected elements and doesn't affect the actual array
// let newFruit = fruit.slice(-4) // we can also use positive number to slice it like (0,3)but here 3 is not included
// console.log(newFruit)

//splice
// we can use this method for add /remove the elements in an array its overwrite the actual array
//syntax arr.splice(positionOfarray,how many elements should remove, "adding the new element")
// fruit.splice(0,0,'waterMelon')
// console.log(fruit)

//foreach 
//using function
// fruit.forEach(function (basket) {
//     console.log(basket)
    
// });

//using arrow function
// fruit.forEach(basket=>{console.log(basket)});










