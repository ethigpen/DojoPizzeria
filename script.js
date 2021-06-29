function pizzaOven(crustType, 
                    sauceType, 
                    cheeses, 
                    toppings){
    var pizza={};
    pizza.crustType = crustType;
    pizza.sauceType = sauceType;
    pizza.cheeses = cheeses;
    pizza.toppings = toppings;
    return pizza;
}

var meatLovers = pizzaOven("deep dish", 
                            "traditional", 
                            ["mozzarella"], 
                            ["pepperoni", "sausage"]);
console.log(meatLovers);

var greek = pizzaOven("hand tossed", 
                        "marinara", 
                        ["mozzarella", "feta"], 
                        ["mushrooms", "olives", "onions"]);
console.log(greek);

var emilesSpecial = pizzaOven("gluten-free", 
                            "traditional",
                            ["dairy-free"],
                            ["pepperoni","canadian bacon","mushrooms"]);
console.log(emilesSpecial);

var kidsPepp = pizzaOven("hand tossed", "traditional",["mozzarella"],["pepperoni"]);
console.log(kidsPepp);