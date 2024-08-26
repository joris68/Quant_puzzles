"use strict";
/**
 *
 */
const p = [0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9];
const N = [20, 50, 80, 100, 120, 150, 180];
function buildLoopUp(p) {
    const res = {};
    const crossproduct = buildCartesian(["A", "B"]);
}
function buildCartesian(arr) {
    const res = [];
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length; j++) {
            res.push([arr[i], arr[j]]);
        }
    }
    return res;
}
const test = buildCartesian(["A", "B"]);
console.log(test);
