function makePizza () {
     const pizzaPromise = new Promise (function (resolve, reject){
        // When you are ready, you can resolve this promise
        resolve("pizzzaaaaa")
        //If something went wrong, we can reject this promise
     });
     return pizzaPromise;
}

const pizza = makePizza();
console.log(pizza)