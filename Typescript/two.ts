console.log("in two.ts");

//named import
//import version, {add, multiply} from './one.js'

import  {add, multiply} from './one.js'

//import  one from './one.js'


function compute(){

    add(2,3);
    multiply(2,3);
    console.log("in compute of two.ts")
}

export default compute;