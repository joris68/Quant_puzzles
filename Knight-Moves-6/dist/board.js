"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.initalizeBoard = void 0;
//some constants
const NUMBER_Bs = 2;
const A_AND_C_combined = 4;
const BOARD_SIZE = 6;
/**
 *
 * A + B + C < 50
 * A, B ,C > 0 ==> because of multipying with 0 would be fatal
 *
 * Both roundtrips = 2024
 */
function getAllCombinations(upper_limit, lower_limit) {
    const allCombinations = [];
    for (let x = lower_limit; x < upper_limit; x++) {
        for (let y = lower_limit; y < upper_limit; y++) {
            for (let z = lower_limit; z < upper_limit; z++) {
                if (x + y + z < upper_limit) {
                    allCombinations.push([x, y, z]);
                }
            }
        }
    }
    return allCombinations;
}
// let a = getAllCombinations(50, 1)
// console.log(a);
// console.log(a.length);
// the score for a given field and board
function getScoreforField(board, field, prevScore) {
    return 1;
}
// build the board given the parameters A, B ,C 
function initalizeBoard(boardSize, comb, startingA) {
    const board = [];
    let As = startingA;
    for (let x = 0; x < boardSize; x++) {
        if (x !== 0 && x % 2 === 0)
            As += 1;
        console.log(As);
        board.push(buildRow(As, comb, A_AND_C_combined));
    }
    return board;
}
exports.initalizeBoard = initalizeBoard;
function buildRow(numberAs, comb, as_and_cs) {
    const arr = [];
    for (let x = 0; x < numberAs; x++)
        arr.push(comb[0]);
    arr.push(comb[1]);
    arr.push(comb[1]);
    for (let x = 0; x < (as_and_cs - numberAs); x++)
        arr.push(comb[2]);
    return arr;
}
// adjency list for knight moves for a given board size
function buildAdjencyList(boardSize) {
    return 1;
}
let board = initalizeBoard(BOARD_SIZE, [1, 2, 3], 1);
console.log(board);
