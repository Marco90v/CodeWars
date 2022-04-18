/***
 * Pete likes to bake some cakes. He has some recipes and ingredients.
 * Unfortunately he is not good in maths.
 * Can you help him to find out, how many cakes he could bake considering his recipes?
 * Write a function cakes(), which takes the recipe (object) and the available ingredients (also an object) and returns the maximum number of cakes Pete can bake (integer).
 * For simplicity there are no units for the amounts (e.g. 1 lb of flour or 200 g of sugar are simply 1 or 200).
 * Ingredients that are not present in the objects, can be considered as 0.
 * ESPAÑOL
 * A Pete le gusta hornear algunos pasteles.
 * Tiene algunas recetas e ingredientes.
 * Desafortunadamente, no es bueno en matemáticas.
 * ¿Puedes ayudarlo a averiguar cuántos pasteles podría hornear considerando sus recetas? Escriba una función cakes(), que tome la receta (objeto) y los ingredientes disponibles (también un objeto) y devuelva el número máximo de pasteles que Pete puede hornear (entero).
 * Para simplificar, no hay unidades para las cantidades (por ejemplo, 1 libra de harina o 200 g de azúcar son simplemente 1 o 200).
 * Los ingredientes que no están presentes en los objetos, se pueden considerar como 0.
 */

function cakes(recipe, available) {
    /**
     * Mejor Solución.
     * return Object.keys(recipe).reduce(function(val, ingredient) {
     * return Math.min(Math.floor(available[ingredient] / recipe[ingredient] || 0), val)
     * }, Infinity) 
     */
    let r = 1;
    let totalCake = 0 ;
    Object.keys(recipe).forEach(e=> {
        if (!(e in available)) {
            r = 0;
        }else{
            const calc = Math.floor(available[e] / recipe[e]);
            totalCake = totalCake > 0 ? calc < totalCake ? calc : totalCake : calc
        }
    });
    return !r ? r : totalCake;
}

// retorna 2
// const recipe = {flour: 500, sugar: 200, eggs: 1};
// const available = {flour: 1200, sugar: 1200, eggs: 5, milk: 200};

// retorna 0
const recipe = {apples: 3, flour: 300, sugar: 150, milk: 100, oil: 100};
const available = {sugar: 500, flour: 2000, milk: 2000};

const res = cakes(recipe, available); // 2
console.log(res);