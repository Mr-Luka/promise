function makePizza (toppings = []) {
     const pizzaPromise = new Promise (function (resolve, reject){
        const amountOfTimeToBake = 500 + (toppings.length * 200)
        //Wait one second for pizza to cook
        setTimeout(function(){
            resolve(`Here is your pizza with toppings ${toppings.join(" ")}`)

        }, amountOfTimeToBake)
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
        return makePizza();
    })
    .then(function(pizza){
        console.log(pizza)
        return makePizza(["one", "two", "three", "four", "five", "six", "one", "two", "three", "four", "five", "six"])
    })
    .then(pizza=>{
        console.log("all done, here is your last pizza")
        console.log(pizza)
    });
console.log("second")