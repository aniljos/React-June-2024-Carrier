console.log("in main.ts");
//named import
//import {compute as myCompute} from './two.js'
//default import
import myCompute from './two.js';
function compute() {
    console.log("in main.js compute");
}
compute();
myCompute();
