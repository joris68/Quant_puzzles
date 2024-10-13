"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const board_js_1 = require("./board.js");
const path_js_1 = require("./path.js");
const cacheCandidates = [];
const adjList = (0, board_js_1.buildAdjencyList)(6);
const allCombinations = (0, board_js_1.getAllCombinations)(50, 1).reverse();
function lowerLeftToUpperRight(startField, endField) {
    for (let x = 0; x < 500; x++) {
        const currCombination = allCombinations[x];
        const possCandidate = (0, path_js_1.runAlgoForComb)(currCombination, startField, endField);
        if (possCandidate) {
            cacheCandidates.push(possCandidate);
        }
        console.log(`Done ${x} iteration`);
    }
}
;
lowerLeftToUpperRight('a6', 'f1');
