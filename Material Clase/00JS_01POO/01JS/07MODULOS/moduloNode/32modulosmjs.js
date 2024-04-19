import { diaNombre } from "./32nombresDia.mjs";
let ahora = new Date();
console.log(`Hoy es ${diaNombre(ahora.getDay())}`);
