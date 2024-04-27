function makePizza (toppings) {
     const pizzaPromise = new Promise (function (resolve, reject){
        //Wait one second for pizza to cook
        setTimeout(function(){
            resolve(`Here is your pizza with toppings ${toppings.join(" ")}`)

        }, 1000)
        // When you are ready, you can resolve this promise
        //If something went wrong, we can reject this promise
     });
     return pizzaPromise;
}
console.log("First")
makePizza(["broccoli", "artichoke"])
    .then(function(pizza){
        console.log(pizza);
        return makePizza(["vegan cheese"]);
    })
    .then(function(pizza){
        console.log(pizza);
        return makePizza(["tomato"])
    })
    .then(function(pizza){
        console.log(pizza)
        return makePizza(["hot peppers", "onion", "apple"]);
    }).then(function(pizza){
        console.log(pizza)
    });
console.log("second")