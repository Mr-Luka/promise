function makePizza (toppings) {
     const pizzaPromise = new Promise (function (resolve, reject){
        // When you are ready, you can resolve this promise
        resolve(`Here is your pizza with toppings ${toppings.join(" ")}`)
        //If something went wrong, we can reject this promise
     });
     return pizzaPromise;
}

const veggiePizza = makePizza(["broccoli", "artichoke"]);
const veganPizza = makePizza(["onions", "mushrooms", "olives"]);


veggiePizza.then(function(pizza){
    console.log("Ahh I got it");
    console.log(pizza)
})