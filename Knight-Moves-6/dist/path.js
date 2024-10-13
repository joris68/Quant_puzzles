"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.runAlgoForComb = void 0;
const board_js_1 = require("./board.js");
const cacheCandidates = [];
const adjList = (0, board_js_1.buildAdjencyList)(6);
const allCombinations = (0, board_js_1.getAllCombinations)(50, 1).reverse();
function runAlgoForComb(comb, startField, endField) {
    const visited = [startField];
    const board = (0, board_js_1.initalizeBoard)(6, comb, 1);
    let StartScore = (0, board_js_1.getFieldValue)((0, board_js_1.convertFieldToIndex)(startField), board);
    return runAlgoBacktrack(board, visited, StartScore, startField, endField, comb);
}
exports.runAlgoForComb = runAlgoForComb;
function runAlgoBacktrack(board, visited, currScore, currField, endField, comb) {
    //console.log(visited);
    const allNextSteps = adjList[currField];
    const nextSteps = legalNextSteps(visited, allNextSteps);
    if (currScore === 2024 && currField === endField) {
        const cand = {
            'comb': comb,
            'path': visited,
            'score': currScore
        };
        return cand;
    }
    if (nextSteps.length === 0)
        return undefined;
    if (currScore >= 2024)
        return undefined;
    if (currField === endField && currScore !== 2024)
        return undefined;
    for (let x = 0; x < nextSteps.length; x++) {
        visited.push(nextSteps[x]);
        runAlgoBacktrack(board, visited, (0, board_js_1.updateScore)(board, nextSteps[x], currScore), nextSteps[x], endField, comb);
        visited.pop();
    }
}
function legalNextSteps(visited, allnextSteps) {
    return allnextSteps.filter(obj => !visited.includes(obj));
}
