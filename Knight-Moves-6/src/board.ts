

export type Board = number[][];
export type Combination = [number, number ,number];
export type AdjencyList = { [key: string]: string[] };
export type IndexPair = [number, number]; // [Row, column]

//some constants
const NUMBER_Bs = 2;
const A_AND_C_combined = 4;
const BOARD_SIZE = 6;
const NOT_SURROUNDED = ['b1', 'a1', 'a2', 'a3', 'e6', 'f6', 'f5', 'f4']


const IndexToRows : { [key: number]: string } = {
    0 : '6',
    1 : '5',
    2 : '4',
    3 : '3',
    4 : '2',
    5 : '1'
};

const IndexToCols : { [key: number]: string } = {
    0 : 'a',
    1 : 'b',
    2 : 'c',
    3 : 'd',
    4 : 'e',
    5 : 'f'
}

const FieldToRows : {[key: string] : number} = {
    '6' : 0,
    '5' : 1,
    '4' : 2,
    '3' : 3,
    '2':  4,
    '1':  5
}

const FieldToCols : {[key : string] : number} = {
    'a' : 0,
    'b' : 1,
    'c' : 2,
    'd' : 3,
    'e':  4,
    'f':  5
}



/**
 * 
 * A + B + C < 50
 * A, B ,C > 0 ==> because of multipying with 0 would be fatal
 * 
 * Both roundtrips = 2024
 */
export function getAllCombinations(upper_limit : number, lower_limit : number): Combination[] {

    const allCombinations : Combination []  = []

    for (let x = lower_limit ; x <  upper_limit; x++) {

        for (let y = lower_limit; y < upper_limit; y++) {

            for (let z = lower_limit; z < upper_limit; z++){
                if(x + y + z < upper_limit){
                    allCombinations.push([x, y, z])
                }
            }
        }
    }

    return allCombinations;
}


// the score for a given field and board
export function updateScore(board: Board, field : string, prevScore : number) : number {
    const indexPair : IndexPair = convertFieldToIndex(field);
    const val = getFieldValue(indexPair, board);
    let newScore : number;

    if(inBetweenTwoIntegers(field)){
        newScore = prevScore * val;
    } else{
        newScore = prevScore + val;
    }
    return newScore;
}

export function getFieldValue(indexPair: IndexPair, board : Board): number{
    return board[indexPair[0]][indexPair[1]];
}

function inBetweenTwoIntegers (field : string) : boolean {
    if(NOT_SURROUNDED.includes(field)){
        return false;
    }else{
        return true;
    }
}

////////////////////////////////////////////////////////


// build the board given the parameters A, B ,C 
export function initalizeBoard(boardSize : number, comb : Combination, startingA: number) : Board {
    const board : Board = [];

    let As = startingA;

    for (let x = 0; x < boardSize; x++){
        if(x !== 0 && x % 2 === 0) As += 1;
        board.push(buildRow(As, comb, A_AND_C_combined));
    }

    return  board;

}

function buildRow(numberAs: number, comb : Combination, as_and_cs: number) : number[] {
    const arr : number [] = [];
    for(let x = 0; x < numberAs; x++) arr.push(comb[0]);
    arr.push(comb[1]);
    arr.push(comb[1]);
    for (let x = 0; x < (as_and_cs - numberAs); x++ ) arr.push(comb[2]);
    return arr;
}

export function convertFieldToIndex(field : string): IndexPair {
    const col = field.charAt(0);
    const row = field.charAt(1);
    const numericalRow = FieldToRows[row];
    const numericalCol = FieldToCols[col];
    
    return [numericalRow, numericalCol];
}

export function convertIndexToField(pair : IndexPair): string {

    return IndexToCols[pair[1]] + IndexToRows[pair[0]];
}


// adjency list for knight moves for a given board size
export function buildAdjencyList(boardSize : number): AdjencyList {
    const adjList: AdjencyList = {};

    for (let x = 0 ; x < boardSize ; x++ ){
        for (let y = 0; y < boardSize ; y++) {
            const indexPair : IndexPair = [x, y];
            const field : string = convertIndexToField(indexPair);
            adjList[field] = calculateNextSteps(field);
        }
    }

    return adjList;
}

function calculateNextSteps(field: string) : string[] {

    const indexGiven : IndexPair = convertFieldToIndex(field);
    const allMoves : IndexPair [] = getAllMoves(indexGiven);
    return allMoves.filter(isValidIndex).map(convertIndexToField);

}

function getAllMoves(indexPair : IndexPair): IndexPair[] {
    const result : IndexPair[] = [];

    result.push([indexPair[0] -2 , indexPair[1] -1]);
    result.push([indexPair[0] -2 , indexPair[1] +1]);

    result.push([indexPair[0] -1 , indexPair[1] +2]);
    result.push([indexPair[0] +1 , indexPair[1] +2]);

    result.push([indexPair[0] +2 , indexPair[1] +1]);
    result.push([indexPair[0] +1 , indexPair[1] -1]);

    result.push([indexPair[0] +1 , indexPair[1] -2]);
    result.push([indexPair[0] -1 , indexPair[1] -2]);

    return result;
}   

function isValidIndex(indexpair : IndexPair) : boolean {
    return (indexpair[0] >= 0 && indexpair[0] <=5 && indexpair[1] >= 0 && indexpair[1] <= 5)
} 

// let a = buildAdjencyList(6);
// console.log(a);
// console.log(Object.keys(a).length);