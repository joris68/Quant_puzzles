"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const board_js_1 = require("./board.js");
const cacheCandidates = [];
const adjList = (0, board_js_1.buildAdjencyList)(6);
const allCombinations = (0, board_js_1.getAllCombinations)(50, 1);
function runAlgoForComb(comb, startField, endField) {
    const visited = [startField];
    const board = (0, board_js_1.initalizeBoard)(6, comb, 1);
    let StartScore = (0, board_js_1.getFieldValue)((0, board_js_1.convertFieldToIndex)(startField), board);
    return runAlgoBacktrack(board, visited, StartScore, startField, endField, comb);
}
function runAlgoBacktrack(board, visited, currScore, currField, endField, comb) {
    console.log(visited);
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
        return;
    if (currScore >= 2024)
        return;
    if (currField === endField && currScore !== 2024)
        return;
    for (let x = 0; x < nextSteps.length; x++) {
        visited.push(nextSteps[x]);
        runAlgoBacktrack(board, visited, (0, board_js_1.updateScore)(board, nextSteps[x], currScore), nextSteps[x], endField, comb);
        visited.pop();
    }
}
function legalNextSteps(visited, allnextSteps) {
    return allnextSteps.filter(obj => !visited.includes(obj));
}
let running = true;
let counter = 0;
const currCombination = [10, 10, 20];
const possCandidate = runAlgoForComb(currCombination, 'a1', 'f6');
if (possCandidate) {
    cacheCandidates.push(possCandidate);
    console.log(possCandidate);
}
else {
    console.log(`Currcombination ${JSON.stringify(currCombination)} is not a a valid combination`);
}
counter++;
