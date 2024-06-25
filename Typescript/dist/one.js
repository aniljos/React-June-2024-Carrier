console.log("in one.ts");
//named export
export function add(a, b) {
    console.log("in add one.ts");
    return a + b;
}
//named export
export function multiply(a, b) {
    console.log("in multiply one.ts");
    return a * b;
}
const version = "1.0.0";
//export default version;
export default { add, multiply };
