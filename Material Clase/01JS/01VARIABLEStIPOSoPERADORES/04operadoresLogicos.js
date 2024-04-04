/*
    valores booleanos: true & false
    operadores lógicos: AND (&&), OR (||), NOT (!)

    AND Lógico (&&)
    expr1 && expr2	Devuelve expr1 si se puede convertir a false;
    de lo contrario, devuelve expr2. 
    Por lo tanto, cuando se usa con valores booleanos, 
    && devuelve true si ambos operandos son true; 
    de lo contrario, devuelve false.

    OR lógico (||)
    Devuelve expr1 si se puede convertir a true;
    de lo contrario, devuelve expr2. 
    Por lo tanto, cuando se usa con valores booleanos, 
    || devuelve true si alguno de los operandos es true; 
    si ambos son falsos, devuelve false.

    NOT lógico (!)
    Devuelve false si su único operando se puede convertir a true; 
    de lo contrario, devuelve true

    Operador Ternario
    condition ? val1 : val2
    Si condition es true, el operador tiene el valor de val1. 
    De lo contrario, tiene el valor de val2. 
    Puedes utilizar el operador condicional en cualquier lugar
    donde normalmente utilizas un operador estándar.

    COMPARACION
        >= (mayor o igual que), 
        <= (menor o igual que), 
        == (igual a),
        != (no igual a).

    El operador ?? se asemeja a ||, pero devuelve el valor de la derecha solo si
    el de la izquierda es null o undefined, no si es algún otro valor que se pueda
    convertir en false. A menudo, este comportamiento es preferible al de ||.
        
*/

console.log("&& ------------")
console.log(true && true)      // t && t devuelve true
console.log(true && false)     // t && f devuelve false
console.log(false && true)     // f && t devuelve false
console.log(false && false)    // f && f devuelve false
console.log("------------")
console.log(true && 3 == 4)  
console.log("Cat" && "Dog") 
console.log(false && "Cat")
console.log(true && "Cat")
console.log("Cat" && false)
console.log("------------")
console.log("------------")
console.log("|| ------------")
console.log(true || true)      // t || t devuelve true
console.log(true || false)     // t || f devuelve true
console.log(false || true)     // f || t devuelve true
console.log(false || false)    // f || f devuelve false
console.log("------------")
console.log(true || 3 == 4)  
console.log("Cat" || "Dog") 
console.log(false || "Cat")
console.log(true || "Cat")
console.log("Cat" || false)
console.log("------------")
console.log("------------")
console.log("! ------------")
console.log(!true)              // !t devuelve false
console.log(!false)             // !f devuelve true
console.log(!"Cat")             // !t devuelve false
console.log("------------")
console.log("------------")
console.log(true ? 1 : 2);
console.log(false ? 1 : 2);
console.log("------------")
console.log("------------")
console.log(0 || 100);
console.log(0 ?? 100);
console.log(null ?? 100);





