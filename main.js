function makePizza (toppings = []) {
     return new Promise (function (resolve, reject){
        // Toppings if people try with pineapple
        if(toppings.includes("pineapple")){
            reject("Seriously? Get out!")
        }
        const amountOfTimeToBake = 500 + (toppings.length * 200)
        //Wait one second for pizza to cook
        setTimeout(function(){
            resolve(`Here is your pizza with toppings ${toppings.join(" ")}`)

        }, amountOfTimeToBake)
        // When you are ready, you can resolve this promise
        //If something went wrong, we can reject this promise
     });
}
// console.log("First")
// makePizza(["broccoli", "artichoke"])
//     .then(function(pizza){
//         console.log(pizza);
//         return makePizza(["vegan cheese"]);
//     })
//     .then(function(pizza){
//         console.log(pizza);
//         return makePizza(["tomato"])
//     })
//     .then(function(pizza){
//         console.log(pizza)
//         return makePizza();
//     })
//     .then(function(pizza){
//         console.log(pizza)
//         return makePizza(["one", "two", "three", "four", "five", "six", "one", "two", "three", "four", "five", "six"])
//     })
//     .then(pizza=>{
//         console.log("all done, here is your last pizza")
//         console.log(pizza)
//     });
// console.log("second")

// Run them concurrently
// const pizzaPromise1 = makePizza(["vegan cheese", "tomato", "mushrooms"]);
// const pizzaPromise2 = makePizza(["one", "two", "three", "four", "five", "six", "one", "two", "three", "four", "five", "six"]);
// const pizzaPromise3 = makePizza(["vegan ham", "vegan cheese"]);

// const dinnerPromise = Promise.all([pizzaPromise1, pizzaPromise2, pizzaPromise3]);

// dinnerPromise.then(function([hottie, garbagePail, tomatoAndBasil]){
//     console.log(hottie, garbagePail, tomatoAndBasil)
// })

// const firstPizzaPromise = Promise.race([pizzaPromise1, pizzaPromise2, pizzaPromise3]);

// firstPizzaPromise.then(pizza=>{
//     console.log("you must be hungry");
//     console.log(pizza)
// })


// function makeBurger (inside=[]) {
//     return new Promise (function (resolve, reject){
//         const timeToMakeBurger = 500 + (inside.length *200);
//         setTimeout(function(){
//             resolve(`Here is your burger with ${inside.join(" ")}`)
//         }, timeToMakeBurger);
//     });
// }

// const burgerPromise = makeBurger(["lettuce", "vegan patty", "tomato", "pickles", "vegan mayo", "mushrooms", "vegan patty", "tomato", "pickles", "vegan mayo", "vegan patty", "tomato", "pickles", "vegan mayo"]);
// const burgerPromise2 = makeBurger(["tomato", "vegan patty"]);
// const burgerPrpmise3 = makeBurger(["vegan patty"]);

// const burgersPromise = Promise.all([burgerPromise, burgerPromise2, burgerPrpmise3]);
// burgersPromise.then(function([bla, blabla, blablabla]){
//     console.log(bla, blabla, blablabla);
// })

// const fastestBurger = Promise.race([burgerPromise, burgerPromise2, burgerPrpmise3]);
// fastestBurger.then(burg=>console.log(burg))
function handleError(err) {
    console.log(err)
}

makePizza(["vegan pepperoni", "pineapple"]).then(pizza=> {
    console.log(pizza)
}).catch(handleError)

const p1 = makePizza(["pep"]);
const p2 = makePizza(["cucumber", "tomato", "pineapple"]);

// making a MEGA promise
const pizzaDinner = Promise.allSettled([p1, p2]);
pizzaDinner.then(result=>{
    console.log(result)
});