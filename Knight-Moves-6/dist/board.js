"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.buildAdjencyList = exports.convertIndexToField = exports.convertFieldToIndex = exports.initalizeBoard = exports.getFieldValue = exports.updateScore = exports.getAllCombinations = void 0;
//some constants
const NUMBER_Bs = 2;
const A_AND_C_combined = 4;
const BOARD_SIZE = 6;
const NOT_SURROUNDED = ['b1', 'a1', 'a2', 'a3', 'e6', 'f6', 'f5', 'f4'];
const IndexToRows = {
    0: '6',
    1: '5',
    2: '4',
    3: '3',
    4: '2',
    5: '1'
};
const IndexToCols = {
    0: 'a',
    1: 'b',
    2: 'c',
    3: 'd',
    4: 'e',
    5: 'f'
};
const FieldToRows = {
    '6': 0,
    '5': 1,
    '4': 2,
    '3': 3,
    '2': 4,
    '1': 5
};
const FieldToCols = {
    'a': 0,
    'b': 1,
    'c': 2,
    'd': 3,
    'e': 4,
    'f': 5
};
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
exports.getAllCombinations = getAllCombinations;
// the score for a given field and board
function updateScore(board, field, prevScore) {
    const indexPair = convertFieldToIndex(field);
    const val = getFieldValue(indexPair, board);
    let newScore;
    if (inBetweenTwoIntegers(field)) {
        newScore = prevScore * val;
    }
    else {
        newScore = prevScore + val;
    }
    return newScore;
}
exports.updateScore = updateScore;
function getFieldValue(indexPair, board) {
    return board[indexPair[0]][indexPair[1]];
}
exports.getFieldValue = getFieldValue;
function inBetweenTwoIntegers(field) {
    if (NOT_SURROUNDED.includes(field)) {
        return false;
    }
    else {
        return true;
    }
}
////////////////////////////////////////////////////////
// build the board given the parameters A, B ,C 
function initalizeBoard(boardSize, comb, startingA) {
    const board = [];
    let As = startingA;
    for (let x = 0; x < boardSize; x++) {
        if (x !== 0 && x % 2 === 0)
            As += 1;
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
function convertFieldToIndex(field) {
    const col = field.charAt(0);
    const row = field.charAt(1);
    const numericalRow = FieldToRows[row];
    const numericalCol = FieldToCols[col];
    return [numericalRow, numericalCol];
}
exports.convertFieldToIndex = convertFieldToIndex;
function convertIndexToField(pair) {
    return IndexToCols[pair[1]] + IndexToRows[pair[0]];
}
exports.convertIndexToField = convertIndexToField;
// adjency list for knight moves for a given board size
function buildAdjencyList(boardSize) {
    const adjList = {};
    for (let x = 0; x < boardSize; x++) {
        for (let y = 0; y < boardSize; y++) {
            const indexPair = [x, y];
            const field = convertIndexToField(indexPair);
            adjList[field] = calculateNextSteps(field);
        }
    }
    return adjList;
}
exports.buildAdjencyList = buildAdjencyList;
function calculateNextSteps(field) {
    const indexGiven = convertFieldToIndex(field);
    const allMoves = getAllMoves(indexGiven);
    return allMoves.filter(isValidIndex).map(convertIndexToField);
}
function getAllMoves(indexPair) {
    const result = [];
    result.push([indexPair[0] - 2, indexPair[1] - 1]);
    result.push([indexPair[0] - 2, indexPair[1] + 1]);
    result.push([indexPair[0] - 1, indexPair[1] + 2]);
    result.push([indexPair[0] + 1, indexPair[1] + 2]);
    result.push([indexPair[0] + 2, indexPair[1] + 1]);
    result.push([indexPair[0] + 1, indexPair[1] - 1]);
    result.push([indexPair[0] + 1, indexPair[1] - 2]);
    result.push([indexPair[0] - 1, indexPair[1] - 2]);
    return result;
}
function isValidIndex(indexpair) {
    return (indexpair[0] >= 0 && indexpair[0] <= 5 && indexpair[1] >= 0 && indexpair[1] <= 5);
}
// let a = buildAdjencyList(6);
// console.log(a);
// console.log(Object.keys(a).length);
